/* eslint-disable react/prop-types */
import { useState } from 'react'
import JazzCashMobileWalletModal from './JazzCashMobileWalletModal'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

// const paymentMethods = [
//     {
//         value: 'cash_on_delivery',
//         label: 'Cash on Delivery',
//         imgSrc: 'https://img.freepik.com/premium-vector/cash-delivery_569841-175.jpg?semt=ais_hybrid',
//     },
//     {
//         value: 'jazzCash',
//         label: 'JazzCash',
//         imgSrc: 'https://www.jazzcash.com.pk/assets/themes/jazzcash/img/mobilink_logo.png',
//     },
// ]

// const PaymentMethod = () => {
//     const {
//         setValue,
//         formState: { errors },
//     } = useFormContext()

//     const [selectedMethod, setSelectedMethod] = useState('')
//     const [isModalOpen, setIsModalOpen] = useState(false)

//     const handleSelectMethod = (value) => {
//         setSelectedMethod(value)
//         setValue('paymentMethod', value, { shouldValidate: true })

//         // Open the modal only if JazzCash is selected
//         if (value === 'jazzcash') {
//             setIsModalOpen(true)
//         } else {
//             setIsModalOpen(false) // Close modal if another payment method is chosen
//         }
//     }

//     const closeModal = () => {
//         setIsModalOpen(false)
//         setSelectedMethod('') // Reset selection after modal closes
//     }

//     return (
//         <div className="space-y-4 w-full">
//             <div>
//                 <label className="input-label">Payment Method</label>
//                 <div className="grid grid-cols-3 gap-4">
//                     {paymentMethods.map((method) => (
//                         <div
//                             key={method.value}
//                             className={`flex items-center justify-center border-2 p-2 rounded-md cursor-pointer ${
//                                 selectedMethod === method.value
//                                     ? 'border-primary-400'
//                                     : 'border-gray-200'
//                             }`}
//                             onClick={() => handleSelectMethod(method.value)}
//                         >
//                             <img
//                                 src={method.imgSrc}
//                                 alt={method.label}
//                                 className="w-20 h-20 object-contain m-2"
//                             />
//                         </div>
//                     ))}
//                 </div>
//                 {errors.paymentMethod && (
//                     <p className="text-red-500 text-xs mt-1">
//                         {errors.paymentMethod.message}
//                     </p>
//                 )}
//             </div>

//             {/* JazzCash Payment Modal - Only opens when "JazzCash" is selected */}
//             {selectedMethod === 'jazzcash' && (
//                 <JazzCashMobileWalletModal
//                     isOpen={isModalOpen}
//                     handleClose={closeModal}
//                 />
//             )}
//         </div>
//     )
// }

// const PaymentMethod = ({ setStep }) => {
//     const [selectedMethod, setSelectedMethod] = useState('')
//     const [isModalOpen, setIsModalOpen] = useState(false)

//     const handleSelectMethod = (value) => {
//         setSelectedMethod(value)
//         // Automatically open modal if "Pay via Wallet" is selected
//         if (value === 'jazzCash') {
//             setIsModalOpen(true)
//         }
//     }

//     // Close modal on cancel or completion
//     const closeModal = () => {
//         setIsModalOpen(false)
//         setSelectedMethod('') // Reset selection after modal closes
//     }

//     // Payment success handler
//     const handlePaymentSuccess = () => {
//         setIsModalOpen(false)
//         console.log('Payment successful! Order will be placed.')
//         // Place order or proceed with payment success actions here
//     }

//     return (
//         <div className="p-6 bg-white rounded-md shadow-md">
//             <div className="flex justify-between items-start">
//                 <div>
//                     <h2 className="text-2xl font-semibold text-gray-800 mb-2">
//                         Payment method
//                     </h2>
//                     <p className="text-xl text-gray-600 mb-10">
//                         Select A Payment Method To Proceed
//                     </p>
//                 </div>
//                 <button
//                     className="text-base text-gray-600 mt-4 flex items-center gap-2 hover:text-gray-700"
//                     onClick={() => setStep(0)}
//                 >
//                     <FaArrowCircleLeft />
//                     <span>Go back</span>
//                 </button>
//             </div>

//             <div className="mb-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mt-4">
//                     <div
//                         className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
//                             selectedMethod === 'cash_on_delivery'
//                                 ? 'border-primary-500 bg-primary-50'
//                                 : 'border-gray-200'
//                         } hover:shadow-md`}
//                         onClick={() => handleSelectMethod('cash_on_delivery')}
//                     >
//                         <input
//                             type="radio"
//                             name="paymentMethod"
//                             value={'cash_on_delivery'}
//                             checked={selectedMethod === 'cash_on_delivery'}
//                             onChange={() =>
//                                 handleSelectMethod('cash_on_delivery')
//                             }
//                             className="mr-3 cursor-pointer"
//                         />
//                         <img
//                             src={
//                                 'https://img.freepik.com/premium-vector/cash-delivery_569841-175.jpg?semt=ais_hybrid'
//                             }
//                             alt={'cash on delivery'}
//                             className="w-8 h-8 mr-3 object-contain"
//                         />
//                         <span className="text-gray-700">Cash On Delivery</span>
//                     </div>
//                 </div>
//             </div>

//             <div className="py-2">
//                 <h2 className="text-2xl mb-4">Cash Via Online</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//                     <div
//                         className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
//                             selectedMethod === 'jazzCash'
//                                 ? 'border-primary-500 bg-primary-50'
//                                 : 'border-gray-200'
//                         } hover:shadow-md`}
//                         onClick={() => handleSelectMethod('jazzCash')}
//                     >
//                         <input
//                             type="radio"
//                             name="paymentMethod"
//                             value={'jazzCash'}
//                             checked={selectedMethod === 'jazzCash'}
//                             onChange={() => handleSelectMethod('jazzCash')}
//                             className="mr-3 cursor-pointer"
//                         />
//                         <img
//                             src={
//                                 'https://www.jazzcash.com.pk/assets/themes/jazzcash/img/mobilink_logo.png'
//                             }
//                             alt={'jazz cash'}
//                             className="w-8 h-8 mr-3 object-contain"
//                         />
//                         <span className="text-gray-700">Jazz Cash Wallet</span>
//                     </div>
//                 </div>
//             </div>

//             {/* JazzCash Payment Modal */}
//             {selectedMethod === 'jazzCash' && (
//                 <JazzCashMobileWalletModal
//                     isOpen={isModalOpen}
//                     handleClose={closeModal}
//                     onSuccess={handlePaymentSuccess}
//                 />
//             )}
//         </div>
//     )
// }

// const PaymentMethod = ({ setStep }) => {
//     const { register, setValue, trigger } = useFormContext()
//     const [selectedMethod, setSelectedMethod] = useState('')
//     const [isModalOpen, setIsModalOpen] = useState(false)
//     const [isPaid, setIsPaid] = useState(false)

//     const handleSelectMethod = async (value) => {
//         setSelectedMethod(value)
//         setValue('paymentMethod', value)

//         if (value === 'jazzCash') {
//             setIsModalOpen(true)
//         } else {
//             setIsPaid(true) // For 'Cash on Delivery', consider it valid without further checks
//             await trigger('paymentMethod') // Validate selection
//         }
//     }

//     const closeModal = () => {
//         setIsModalOpen(false)
//         setSelectedMethod('')
//         setIsPaid(false)
//     }

//     const handlePaymentSuccess = async () => {
//         setIsModalOpen(false)
//         setIsPaid(true) // Mark as paid for 'Jazz Cash'
//         await trigger('paymentMethod') // Trigger validation to allow proceeding
//     }

//     return (
//         <div className="p-6 bg-white rounded-md shadow-md">
//             <div className="flex justify-between items-start">
//                 <div>
//                     <h2 className="text-2xl font-semibold text-gray-800 mb-2">
//                         Payment method
//                     </h2>
//                     <p className="text-xl text-gray-600 mb-10">
//                         Select A Payment Method To Proceed
//                     </p>
//                 </div>
//                 <button
//                     className="text-base text-gray-600 mt-4 flex items-center gap-2 hover:text-gray-700"
//                     onClick={() => setStep(0)}
//                 >
//                     <FaArrowCircleLeft />
//                     <span>Go back</span>
//                 </button>
//             </div>

//             <div className="mb-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//                     <div
//                         className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
//                             selectedMethod === 'cash_on_delivery'
//                                 ? 'border-primary-500 bg-primary-50'
//                                 : 'border-gray-200'
//                         } hover:shadow-md`}
//                         onClick={() => handleSelectMethod('cash_on_delivery')}
//                     >
//                         <input
//                             type="radio"
//                             {...register('paymentMethod', {
//                                 required: 'Please select a payment method',
//                                 validate: () =>
//                                     selectedMethod !== 'jazzCash' ||
//                                     isPaid ||
//                                     'Payment must be completed to proceed',
//                             })}
//                             value="cash_on_delivery"
//                             checked={selectedMethod === 'cash_on_delivery'}
//                             onChange={() =>
//                                 handleSelectMethod('cash_on_delivery')
//                             }
//                             className="mr-3 cursor-pointer"
//                         />
//                         <img
//                             src="https://img.freepik.com/premium-vector/cash-delivery_569841-175.jpg?semt=ais_hybrid"
//                             alt="cash on delivery"
//                             className="w-8 h-8 mr-3 object-contain"
//                         />
//                         <span className="text-gray-700">Cash On Delivery</span>
//                     </div>
//                 </div>
//             </div>

//             <div className="py-2">
//                 <h2 className="text-2xl mb-4">Cash Via Online</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//                     <div
//                         className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
//                             selectedMethod === 'jazzCash'
//                                 ? 'border-primary-500 bg-primary-50'
//                                 : 'border-gray-200'
//                         } hover:shadow-md`}
//                         onClick={() => handleSelectMethod('jazzCash')}
//                     >
//                         <input
//                             type="radio"
//                             {...register('paymentMethod', {
//                                 required: 'Please select a payment method',
//                                 validate: () =>
//                                     selectedMethod !== 'jazzCash' ||
//                                     isPaid ||
//                                     'Payment must be completed to proceed',
//                             })}
//                             value="jazzCash"
//                             checked={selectedMethod === 'jazzCash'}
//                             onChange={() => handleSelectMethod('jazzCash')}
//                             className="mr-3 cursor-pointer"
//                         />
//                         <img
//                             src="https://www.jazzcash.com.pk/assets/themes/jazzcash/img/mobilink_logo.png"
//                             alt="jazz cash"
//                             className="w-8 h-8 mr-3 object-contain"
//                         />
//                         <span className="text-gray-700">Jazz Cash Wallet</span>
//                     </div>
//                 </div>
//             </div>

//             {/* JazzCash Payment Modal */}
//             {selectedMethod === 'jazzCash' && (
//                 <JazzCashMobileWalletModal
//                     isOpen={isModalOpen}
//                     handleClose={closeModal}
//                     onSuccess={handlePaymentSuccess}
//                 />
//             )}
//         </div>
//     )
// }

const PaymentMethod = ({ onSubmit }) => {
    // Initialize useForm for this component
    const {
        register,
        setValue,
        trigger,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            paymentMethod: '',
        },
    })

    const [selectedMethod, setSelectedMethod] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isPaid, setIsPaid] = useState(false)

    const navigate = useNavigate()

    const handleSelectMethod = async (value) => {
        setSelectedMethod(value)
        setValue('paymentMethod', value)

        if (value === 'jazzCash') {
            setIsModalOpen(true)
        } else {
            setIsPaid(true) // For 'Cash on Delivery', mark as paid without further checks
            await trigger('paymentMethod') // Validate selection
        }
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedMethod('')
        setIsPaid(false)
    }

    const handlePaymentSuccess = async () => {
        setIsModalOpen(false)
        setIsPaid(true) // Mark as paid for 'Jazz Cash'
        await trigger('paymentMethod') // Trigger validation to allow proceeding
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-6 bg-white rounded-md shadow-md"
        >
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        Payment method
                    </h2>
                    <p className="text-xl text-gray-600 mb-10">
                        Select A Payment Method To Proceed
                    </p>
                </div>
                <button
                    type="button"
                    className="text-base text-gray-600 mt-4 flex items-center gap-2 hover:text-gray-700"
                    onClick={() => navigate('/checkout/shipping-address')}
                >
                    <FaArrowCircleLeft />
                    <span>Go back</span>
                </button>
            </div>

            <div className="mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div
                        className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                            selectedMethod === 'cash_on_delivery'
                                ? 'border-primary-500 bg-primary-50'
                                : 'border-gray-200'
                        } hover:shadow-md`}
                        onClick={() => handleSelectMethod('cash_on_delivery')}
                    >
                        <input
                            type="radio"
                            {...register('paymentMethod', {
                                required: 'Please select a payment method',
                                validate: () =>
                                    selectedMethod !== 'jazzCash' ||
                                    isPaid ||
                                    'Payment must be completed to proceed',
                            })}
                            value="cash_on_delivery"
                            checked={selectedMethod === 'cash_on_delivery'}
                            onChange={() =>
                                handleSelectMethod('cash_on_delivery')
                            }
                            className="mr-3 cursor-pointer"
                        />
                        <img
                            src="https://img.freepik.com/premium-vector/cash-delivery_569841-175.jpg?semt=ais_hybrid"
                            alt="cash on delivery"
                            className="w-8 h-8 mr-3 object-contain"
                        />
                        <span className="text-gray-700">Cash On Delivery</span>
                    </div>
                </div>
            </div>

            <div className="py-2">
                <h2 className="text-2xl mb-4">Cash Via Online</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div
                        className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                            selectedMethod === 'jazzCash'
                                ? 'border-primary-500 bg-primary-50'
                                : 'border-gray-200'
                        } hover:shadow-md`}
                        onClick={() => handleSelectMethod('jazzCash')}
                    >
                        <input
                            type="radio"
                            {...register('paymentMethod', {
                                required: 'Please select a payment method',
                                validate: () =>
                                    selectedMethod !== 'jazzCash' ||
                                    isPaid ||
                                    'Payment must be completed to proceed',
                            })}
                            value="jazzCash"
                            checked={selectedMethod === 'jazzCash'}
                            onChange={() => handleSelectMethod('jazzCash')}
                            className="mr-3 cursor-pointer"
                        />
                        <img
                            src="https://www.jazzcash.com.pk/assets/themes/jazzcash/img/mobilink_logo.png"
                            alt="jazz cash"
                            className="w-8 h-8 mr-3 object-contain"
                        />
                        <span className="text-gray-700">Jazz Cash Wallet</span>
                    </div>
                </div>
            </div>

            {/* JazzCash Payment Modal */}
            {selectedMethod === 'jazzCash' && (
                <JazzCashMobileWalletModal
                    isOpen={isModalOpen}
                    handleClose={closeModal}
                    onSuccess={handlePaymentSuccess}
                />
            )}

            {errors.paymentMethod && (
                <p className="text-red-500 text-xs mt-1">
                    {errors.paymentMethod.message}
                </p>
            )}

            <button
                type="submit"
                className="mt-6 px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600"
                disabled={
                    !selectedMethod ||
                    (selectedMethod === 'jazzCash' && !isPaid)
                }
            >
                Proceed to Place Order
            </button>
        </form>
    )
}

export default PaymentMethod
