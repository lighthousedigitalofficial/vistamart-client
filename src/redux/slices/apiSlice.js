/* eslint-disable no-unused-vars */
import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'
import keys from '../../config/keys'

const baseQuery = fetchBaseQuery({
    baseUrl: `${keys.BASE_URL}/api/v1`,
    prepareHeaders: (headers, { getState }) => {
        const userInfo = localStorage.getItem('userInfo')
        const user = JSON.parse(userInfo)

        if (user) {
            headers.set('Authorization', `Bearer ${user?.accessToken}`)
        }

        return headers
    },
})

export const apiSlice = createApi({
    baseQuery,
    credentials: 'include',
    tagTypes: [
        'Product',
        'Category',
        'Brand',
        'Order',
        'User',
        'Customer',
        'Vendor',
        'WishList',
    ],
    // eslint-disable-next-line no-unused-vars
    endpoints: (builder) => ({}),
})
