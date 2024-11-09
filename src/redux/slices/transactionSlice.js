import { TRANSACTIONS_URL } from '../constants'
import { apiSlice } from './apiSlice'

export const transactionApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        jazzCashMobileWallet: builder.mutation({
            query: (data) => ({
                url: `${TRANSACTIONS_URL}/initiate/wallet`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Transaction'],
        }),
    }),
})

export const { useJazzCashMobileWalletMutation } = transactionApiSlice
