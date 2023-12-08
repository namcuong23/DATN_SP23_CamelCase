import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import IBanner from "../../interface/admin/banner";


export const bannerApi: any = createApi({
    reducerPath: 'bannerApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api' }),
    tagTypes: ['banner'],
    endpoints: (builder: any) => ({
       
        changeBanner: builder.mutation({
            query: (user: IBanner) => ({
                url: '/banners/change-banner',
                method: 'PUT',
                body: user
            }),
            invalidatesTags: ['banner']
        }),
       
    })
})

export const {
    useChangeBannerMutation,
} = bannerApi