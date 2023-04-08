import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import IUserNTV from "../interface/user";

interface IAuth {
    email: string;
    password: string
}

export const authApi = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api' }),
    tagTypes: ['auth'],
    endpoints: (builder: any) => ({
        signup: builder.mutation({
            query: (user: IAuth) => ({
                url: '/signup/ntv',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['auth']

        }),
        signin: builder.mutation({
            query: (user: IAuth) => ({
                url: '/signin/ntv',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['auth']
        }),
        getUserByEmail: builder.query({
            query: (email: string) => `/users/${email}`,
            providesTags: ['auth']
        })
    })
})

export const {
    useSignupMutation,
    useSigninMutation,
    useGetUserByEmailQuery
} = authApi