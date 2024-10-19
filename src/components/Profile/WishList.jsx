import WishItem from './subcomponenets/WishItem'
import img from '../../assets/empty_wishlist.png'
const WishList = ({ customer, refetch }) => {
    const wishlist = [
        {
            product: {
                _id: '1',
                name: 'Product 1',
                price: 100,
                discount: 10,
                thumbnail: 'https://tmart-8.myshopify.com/cdn/shop/products/04_cd10a204-6265-416d-a026-5f9ef75f611d_grande.jpg?v=1517554070',
            },
        },
    ]

    return (
        <div className="border border-primary-100 rounded-lg min-h-screen">
            <div className="max-w-5xl mx-auto bg-white rounded-lg  p-6">
                <h1 className="text-2xl font-semibold mb-5">My Wishlist</h1>
                {wishlist.length > 0 ? (
                    wishlist.map((item) => (
                        <WishItem
                            key={item.product._id}
                            product={item.product}
                            customer={customer}
                            refetch={refetch}
                        />
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center">
                        {/* <FaHeartBroken className="text-gray-400 text-6xl mb-4" /> */}
                        {/* <p className="text-gray-500 text-lg">No wishlist items available</p> */}
                        <img src={img} alt="empty_wishlist" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default WishList