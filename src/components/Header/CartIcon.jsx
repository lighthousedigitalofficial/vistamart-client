import {
    Badge,
    IconButton,
    Menu,
    MenuHandler,
    MenuList,
} from '@material-tailwind/react'
import { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { MdArrowDropDown } from 'react-icons/md'
import { useSelector } from 'react-redux'
import CartView from '../Cart/CartView'
import { Link, useNavigate } from 'react-router-dom'

const CartIcon = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const navigate = useNavigate()

    const cart = useSelector((state) => state.cart)
    const totalItems = cart?.totalQty?.toString() || '0'
    const totalPrice = cart?.totalPrice || 0

    // Open menu on hover
    const handleMouseEnter = () => {
        setOpenMenu(true)
    }

    // Close menu when mouse leaves
    const handleMouseLeave = () => {
        setOpenMenu(false)
    }

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="outline-none border-none"
        >
            <Menu
                open={openMenu}
                handler={setOpenMenu}
                className="outline-none"
            >
                <MenuHandler>
                    <Link
                        to="/cart"
                        className="flex flex-row items-center bg-transparent"
                    >
                        <Badge content={totalItems}>
                            <IconButton
                                variant="text"
                                aria-label="Shopping Cart"
                                className="rounded-full border-none outline-none"
                            >
                                <FaShoppingCart className="h-5 w-5 text-primary-500" />
                            </IconButton>
                        </Badge>
                        {/* <button className="hidden md:block text-center w-24 border-none lg:flex flex-col text-sm items-center justify-center">
                            <span className="text-gray-600">My cart</span>
                            <div className="text-gray-900 flex-center gap-2 font-bold">
                                <span>Rs. {totalPrice.toLocaleString()}</span>
                                <MdArrowDropDown />
                            </div>
                        </button> */}
                    </Link>
                </MenuHandler>
                <MenuList className="overflow-visible md:grid shadow-md">
                    <CartView />
                </MenuList>
            </Menu>
        </div>
    )
}

export default CartIcon
