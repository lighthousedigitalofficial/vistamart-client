import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import SellerRegForm2 from './SellerRegForm2'
import SellerRegForm1 from './SellerRegForm1'
import { useVendorRegisterMutation } from '../../redux/slices/vendorsApiSlice'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

import {
    deleteUploadedImages,
    getUploadUrl,
    uploadImageToS3,
} from './../../utils/helpers'

// Combined schema for both steps
const schema = z
    .object({
        email: z.string().email('Invalid email address'),
        password: z
            .string()
            .min(8, 'Password must be at least 8 characters')
            .regex(
                /[a-z]/,
                'Password must contain at least one lowercase letter'
            )
            .regex(
                /[A-Z]/,
                'Password must contain at least one uppercase letter'
            )
            .regex(/[0-9]/, 'Password must contain at least one number')
            .regex(
                /[^a-zA-Z0-9]/,
                'Password must contain at least one special character'
            ),
        confirmPassword: z
            .string()
            .min(8, 'Password must be at least 8 characters'),
        phoneNumber: z.string().min(1, 'Phone number is required'),
        firstName: z.string().min(1, 'First name is required'),
        lastName: z.string().min(1, 'Last name is required'),
        shopName: z.string().min(1, 'Shop name is required'),
        address: z.string().min(3, 'Shop address is required'),
        logo: z.any(),
        banner: z.any(),
        vendorImage: z.any(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Passwords do not match',
        path: ['confirmPassword'],
    })

const MultiStepForm = () => {
    const [logoImages, setLogoImages] = useState([])
    const [bannerImages, setBannerImages] = useState([])
    const [vendorImages, setVendorImages] = useState([])
    const [step, setStep] = useState(0)

    const [vendorRegister, { isLoading }] = useVendorRegisterMutation()

    const methods = useForm({
        resolver: zodResolver(schema),
        mode: 'onSubmit', // Validates only on form submission
        reValidateMode: 'onChange', // Validates on each change after initial submission
    })

    const navigate = useNavigate()

    const isPasswordStrong = (password) => {
        const hasMinLength = password.length >= 8
        const hasUppercase = /[A-Z]/.test(password)
        const hasNumber = /\d/.test(password)
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
        return hasMinLength && hasUppercase && hasNumber && hasSpecialChar
    }

    const handleNext = async () => {
        const isValid = await methods.trigger([
            'email',
            'password',
            'confirmPassword',
            'phoneNumber',
        ])
        if (!isValid) {
            toast.error('Please fill all the required inputs.')
            return
        }

        const { password, confirmPassword } = methods.getValues()

        // Check if password is strong
        if (!isPasswordStrong(password)) {
            return toast.error(
                'Password must be at least 8 characters long, include an uppercase letter, a number, and a special character.'
            )
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            return toast.error('Passwords do not match')
        }

        if (step === 0) {
            setStep(step + 1)
        }
    }

    const handlePrev = () => {
        if (step > 0) {
            setStep(step - 1)
        }
    }

    async function uploadImage(uploadConfig, file) {
        try {
            await uploadImageToS3(uploadConfig.url, file)
            return uploadConfig.key // Return the key if successful
        } catch (error) {
            console.error(`Failed to upload ${file.name}:`, error)
            return null // Return null on failure
        }
    }

    const onSubmit = async (data) => {
        const uploadedKeys = [] // Store successfully uploaded image keys
        try {
            // Extract files or use default values
            const logoFile = logoImages?.[0]?.file || null
            const bannerFile = bannerImages?.[0]?.file || null
            const vendorFile = vendorImages?.[0]?.file || null

            // Step 1: Get upload URLs for the three images
            const [logoUploadConfig, bannerUploadConfig, vendorUploadConfig] =
                await Promise.all([
                    getUploadUrl(logoFile.type, 'vendors'),
                    getUploadUrl(bannerFile.type, 'vendors'),
                    getUploadUrl(vendorFile.type, 'vendors'),
                ])

            // Step 2: Upload images to S3 using the uploadImage helper function
            uploadedKeys.push(await uploadImage(logoUploadConfig, logoFile))
            uploadedKeys.push(await uploadImage(bannerUploadConfig, bannerFile))
            uploadedKeys.push(await uploadImage(vendorUploadConfig, vendorFile))

            // Step 3: Check if any image failed to upload
            const successfulUploads = uploadedKeys.filter((key) => key !== null)

            if (successfulUploads.length < 3) {
                // If not all images were uploaded, delete the successfully uploaded ones
                await deleteUploadedImages(successfulUploads)
                toast.error(
                    'Image upload failed, deleted previously uploaded images.'
                )
                return
            }

            if (data.password !== data.confirmPassword) {
                toast.error('Passwords do not match')
                return
            }

            data.confirmPassword = undefined

            // Step 4: Prepare final data object with all uploaded image keys
            const finalData = {
                ...data,
                logo: successfulUploads[0],
                banner: successfulUploads[1],
                vendorImage: successfulUploads[2],
            }

            // Instead of FormData, send JSON data
            await vendorRegister(finalData).unwrap()
            toast.success('Vendor registered successfully')
            navigate('/auth/vendor/login')
        } catch (err) {
            toast.error(err?.data?.message || err.error)
            console.error('Error: ', err)
        }
    }

    return (
        <div className="container mx-auto p-2">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    {step === 0 && (
                        <>
                            <SellerRegForm1 errors={methods.formState.errors} />
                            <div className="flex justify-end mt-4">
                                <button
                                    className="btn primary-btn cursor-pointer"
                                    type="button"
                                    onClick={handleNext}
                                >
                                    Next
                                </button>
                            </div>
                        </>
                    )}
                    {step === 1 && (
                        <>
                            <SellerRegForm2
                                errors={methods.formState.errors}
                                logoImages={logoImages}
                                setLogoImages={setLogoImages}
                                bannerImages={bannerImages}
                                setBannerImages={setBannerImages}
                                vendorImages={vendorImages}
                                setVendorImages={setVendorImages}
                            />
                            <div className="flex justify-between items-center mt-4">
                                {step > 0 && (
                                    <div className="flex justify-between items-center mt-4">
                                        <button
                                            className="btn secondary-btn"
                                            type="button"
                                            onClick={handlePrev}
                                        >
                                            Previous
                                        </button>
                                    </div>
                                )}
                                <button
                                    className="btn primary-btn justify-self-end cursor-pointer"
                                    type="submit"
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Loading...' : 'Submit'}
                                </button>
                            </div>
                        </>
                    )}
                </form>
            </FormProvider>
        </div>
    )
}

export default MultiStepForm
