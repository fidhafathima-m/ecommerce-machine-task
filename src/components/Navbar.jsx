import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const cartItems = useSelector(state => state.cart.items)
    const {token} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(logout())
        if(!token) {
            navigate("/")
        }
    }
  return (
    <div>
        <h2>My Cart</h2>
        <p>Cart: {cartItems.length}</p>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Navbar