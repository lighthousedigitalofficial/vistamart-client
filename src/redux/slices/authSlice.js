import { createSlice } from '@reduxjs/toolkit'

let initialState = {}

if (typeof localStorage !== 'undefined') {
    initialState = {
        userInfo: localStorage.getItem('userInfo')
            ? JSON.parse(localStorage.getItem('userInfo'))
            : null,
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload
            localStorage.setItem('userInfo', JSON.stringify(action.payload))

            const expirationTime =
                new Date().getTime() + 30 * 24 * 60 * 60 * 1000 // 30 days
            localStorage.setItem('expirationTime', expirationTime)
        },
        updateCredentials: (state, action) => {
            state.userInfo = action.payload
            localStorage.setItem('userInfo', JSON.stringify(action.payload))
        },

        logout: (state, action) => {
            state.userInfo = null
            // NOTE: here we need to also remove the cart from storage so the next
            // logged in user doesn't inherit the previous users cart and shipping
            // localStorage.clear()
            localStorage.removeItem('userInfo')
        },
    },
})

export const { setCredentials, logout } = authSlice.actions

export default authSlice.reducer
