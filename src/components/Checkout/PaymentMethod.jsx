import { useFormContext } from 'react-hook-form'

const paymentMethods = [
    { value: 'cash_on_delivery', label: 'Cash on Delivery', imgSrc: 'https://img.freepik.com/premium-vector/cash-delivery_569841-175.jpg?semt=ais_hybrid' },
    { value: 'credit-card', label: 'Credit Card', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8eHuZdO5eG-fP00sXeZNnBPwjVUbs3VLW7g&s' },
    { value: 'jazzcash', label: 'JazzCash', imgSrc: 'https://www.jazzcash.com.pk/assets/themes/jazzcash/img/mobilink_logo.png' },
    { value: 'easypaisa', label: 'EasyPaisa', imgSrc: 'https://easypaisa.com.pk/wp-content/uploads/2022/12/Group-129.png' },
]

const PaymentMethod = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext()

    return (
        <div className="space-y-4 w-full">
            <div>
                <label className="input-label">Payment Method</label>
                <div className="grid grid-cols-2 gap-4">
                    {paymentMethods.map((method) => (
                        <label key={method.value} className="flex items-center">
                            <input
                                type="radio"
                                {...register('paymentMethod', { required: 'Payment method is required' })}
                                value={method.value}
                                className=""
                            />
                            <img src={method.imgSrc} alt={method.label} className="w-12 h-12 object-contain m-2" />
                            {/* <span>{method.label}</span> */}
                        </label>
                    ))}
                </div>
                {errors.paymentMethod && (
                    <p className="text-red-500 text-xs mt-1">
                        {errors.paymentMethod.message}
                    </p>
                )}
            </div>
        </div>
    )
}

export default PaymentMethod