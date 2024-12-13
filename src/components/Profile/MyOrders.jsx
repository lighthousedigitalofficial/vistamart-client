import { useGetMyOrdersQuery } from '../../redux/slices/ordersApiSlice'
import { useSelector } from 'react-redux'
import Loader from '../Loader'

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Tooltip,
    IconButton,
} from '@mui/material'
import { FaRegCopy, FaRegEye } from 'react-icons/fa'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

const MyOrders = () => {
    const { user } = useSelector((state) => state.auth.userInfo)
    const { data: orders, isLoading } = useGetMyOrdersQuery(user._id, {
        skip: !user._id,
    })

    const formatDate = (dateString) => {
        const options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        }
        return new Date(dateString).toLocaleString('en-US', options)
    }

    const handleCopy = (orderId) => {
        navigator.clipboard.writeText(orderId)
        toast.success(`Order ID ${orderId} copied to clipboard!`)
    }

    const getStatusStyle = (status) => {
        switch (status.toLowerCase()) {
            case 'pending':
                return { backgroundColor: '#FFECB3', color: '#FF6F00' } // Amber
            case 'confirmed':
                return { backgroundColor: '#BBDEFB', color: '#1E88E5' } // Blue
            case 'packaging':
                return { backgroundColor: '#E3F2FD', color: '#1565C0' } // Light Blue
            case 'out_for_delivery':
                return { backgroundColor: '#C8E6C9', color: '#2E7D32' } // Green
            case 'delivered':
                return { backgroundColor: '#C8E6C9', color: '#1B5E20' } // Dark Green
            case 'failed_to_deliver':
                return { backgroundColor: '#FFCDD2', color: '#C62828' } // Red
            case 'returned':
                return { backgroundColor: '#D1C4E9', color: '#673AB7' } // Purple
            case 'canceled':
                return { backgroundColor: '#FFCDD2', color: '#D32F2F' } // Red
            default:
                return { backgroundColor: '#E0E0E0', color: '#757575' } // Gray
        }
    }

    const getPaymentStatusColor = (status) => {
        switch (status) {
            case 'Unpaid':
                return '#FF6F61' // Vibrant Red-Orange for Unpaid
            case 'Paid':
                return '#4CAF50' // Bright Green for Paid
            default:
                return '#B0BEC5' // Soft Gray for Default/Unknown
        }
    }

    return (
        <div style={{ padding: '16px' }}>
            <h1 className="text-2xl font-semibold mb-5">My Orders</h1>

            {isLoading ? (
                <Loader />
            ) : orders && orders.doc && orders.doc.length > 0 ? (
                <TableContainer component={Paper} elevation={3}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <strong>No.</strong>
                                </TableCell>
                                <TableCell>
                                    <strong>Order ID</strong>
                                </TableCell>
                                <TableCell>
                                    <strong>Order Date</strong>
                                </TableCell>
                                <TableCell>
                                    <strong>Payment Status</strong>
                                </TableCell>
                                <TableCell>
                                    <strong>Status</strong>
                                </TableCell>
                                <TableCell align="right">
                                    <strong>Total (Rs.)</strong>
                                </TableCell>
                                <TableCell align="right">
                                    <strong>View</strong>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.doc.map((order, index) => (
                                <TableRow key={order._id} hover>
                                    <TableCell align="right">
                                        {1 + index}
                                    </TableCell>
                                    <TableCell>
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <span>{order.orderId}</span>
                                            <Tooltip title="Copy Order ID">
                                                <IconButton
                                                    size="small"
                                                    onClick={() =>
                                                        handleCopy(
                                                            order.orderId
                                                        )
                                                    }
                                                    style={{
                                                        marginLeft: '8px',
                                                    }}
                                                >
                                                    <FaRegCopy />
                                                </IconButton>
                                            </Tooltip>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        {formatDate(order.createdAt)}
                                    </TableCell>
                                    <TableCell>
                                        <span
                                            style={{
                                                padding: '4px 8px',
                                                borderRadius: '4px',
                                                fontWeight: 'bold',
                                                textTransform: 'uppercase',
                                                color: '#fff',
                                                backgroundColor:
                                                    getPaymentStatusColor(
                                                        order.paymentStatus
                                                    ),
                                            }}
                                        >
                                            {order.paymentStatus}
                                        </span>
                                    </TableCell>

                                    <TableCell>
                                        <span
                                            style={{
                                                padding: '4px 8px',
                                                borderRadius: '4px',
                                                fontWeight: 'bold',
                                                textTransform: 'uppercase',
                                                ...getStatusStyle(order.status),
                                            }}
                                        >
                                            {order.status}
                                        </span>
                                    </TableCell>
                                    <TableCell align="right">
                                        {order.totalAmount
                                            ? order.totalAmount.toFixed(2)
                                            : '0.00'}
                                    </TableCell>
                                    <TableCell align="center">
                                        <Link
                                            to={`/profile/orders/details/${order.orderId}`}
                                            className="text-center"
                                        >
                                            <FaRegEye className="text-primary-500 text-center w-full hover:text-primary-400 ease-in translate-all" />
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <Typography
                    variant="body1"
                    color="textSecondary"
                    align="center"
                    style={{ marginTop: '20px' }}
                >
                    No orders found!
                </Typography>
            )}
        </div>
    )
}

export default MyOrders
