import { BANNERS_URL } from '../constants'
import { apiSlice } from './apiSlice'

export const bannersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBanners: builder.query({
            query: (params) => ({
                url: `${BANNERS_URL}?sort=-createdAt&publish=true`,
                params,
            }),
        }),
    }),
})

export const { useGetBannersQuery } = bannersApiSlice
