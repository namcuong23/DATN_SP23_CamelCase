import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const authApi = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api' }),
    tagTypes: ['auth'],
    endpoints: (builder: any) => ({
        signup: builder.mutation({
            query: (user: any) => ({
                url: '/signup',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['auth']

        }),
        signin: builder.mutation({
            query: (user: any) => ({
                url: '/signin',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['auth']
        })
    })
})

export const {
    useSignupMutation,
    useSigninMutation
} = authApi