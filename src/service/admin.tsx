import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"

export const adminApi = createApi({
    reducerPath: 'admin',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api' }),
    tagTypes: ['admin'],
    endpoints: (builder: any) => ({
        getProfiles: builder.query({
            query: () => ({
                url: '/profiles/users',
                providesTags: ['admin']
            }),
            invalidatesTags: ['admin']
        }),
    })
})
