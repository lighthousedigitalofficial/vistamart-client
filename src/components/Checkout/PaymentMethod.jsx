import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

const paymentMethods = [
    { value: 'cash_on_delivery', label: 'Cash on Delivery', imgSrc: 'https://img.freepik.com/premium-vector/cash-delivery_569841-175.jpg?semt=ais_hybrid' },
    { value: 'credit-card', label: 'Credit Card', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8eHuZdO5eG-fP00sXeZNnBPwjVUbs3VLW7g&s' },
    { value: 'jazzcash', label: 'JazzCash', imgSrc: 'https://www.jazzcash.com.pk/assets/themes/jazzcash/img/mobilink_logo.png' },
    { value: 'easypaisa', label: 'EasyPaisa', imgSrc: 'https://easypaisa.com.pk/wp-content/uploads/2022/12/Group-129.png' },
]

const PaymentMethod = ({onClick, disable}) => {
    const { setValue, formState: { errors } } = useFormContext()
    const [selectedMethod, setSelectedMethod] = useState('')

    const handleSelectMethod = (value) => {
        setSelectedMethod(value)
        setValue('paymentMethod', value, { shouldValidate: true })
    }
    return (
        <div className="space-y-4 w-full">
            <div>
                <label className="input-label">Payment Method</label>
                <div className="grid grid-cols-3 gap-4">
                {paymentMethods.map((method) => (
                        <div
                            key={method.value}
                            className={`flex items-center justify-center border-2 p-2 rounded-md cursor-pointer ${selectedMethod === method.value ? 'border-primary-400' : 'border-gray-200'}`}
                            onClick={() => handleSelectMethod(method.value)}
                        >
                            <img src={method.imgSrc} alt={method.label} className="w-20 h-20 object-contain m-2" />
                        </div>
                    ))}
                </div>
                {errors.paymentMethod && (
                    <p className="text-red-500 text-xs mt-1">
                        {errors.paymentMethod.message}
                    </p>
                )}
            </div>
            <button
                    onClick={onClick}
                    disabled={!selectedMethod || disable}
                    className="btn btn-primary"
                >
                    Continue
            </button>
        </div>
    )
}

export default PaymentMethod