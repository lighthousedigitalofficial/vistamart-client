import { useState } from 'react'
import keys from '../../config/keys'
import axios from 'axios'

const JazzCashCard = () => {
    const [formData, setFormData] = useState({
        pp_Version: '1.1',
        pp_TxnType: 'MPAY',
        pp_MerchantID: 'MC133533',
        pp_Password: '8a03t83etu',
        pp_Amount: '10000',
        pp_Language: 'EN',
        pp_TxnRefNo: 'T20241106115800',
        pp_TxnDateTime: '20241106115809',
        pp_TxnExpiryDateTime: '20241107115809',
        pp_BillReference: 'billRef',
        pp_Description: 'Description of transaction',
        pp_ReturnURL:
            'https://www.api2.vistamart.biz/api/v1/transaction/payment/jazzcash/return',
        pp_TxnCurrency: 'PKR',
        pp_SecureHash: '',
        salt: '94ub3u9a2y',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post(
                `${keys.BASE_URL}/api/v1/transaction/payment/generate-hash`,
                formData
            )

            if (data.hash) {
                setFormData({ ...formData, pp_SecureHash: data.hash })
                console.log(
                    `https://sandbox.jazzcash.com.pk/CustomerPortal/transactionmanagement/merchantform/?` +
                        formData
                )
                document.forms['jazzcashForm'].submit()
            }
        } catch (error) {
            console.error('Error generating hash:', error)
        }
    }

    return (
        <form
            name="jazzcashForm"
            method="post"
            action="https://sandbox.jazzcash.com.pk/CustomerPortal/transactionmanagement/merchantform/"
        >
            {Object.keys(formData).map((key) => (
                <div key={key}>
                    <label>{key}:</label>
                    <input
                        type="text"
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        readOnly={key === 'pp_SecureHash' || key === 'salt'}
                    />
                </div>
            ))}
            <button type="button" onClick={handleSubmit}>
                Submit
            </button>
        </form>
    )
}

export default JazzCashCard
