import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import IUserNTV from "../interface/user";

interface IAuth {
    email: string;
    password: string
}

export const authApi: any = createApi({
    reducerPath: 'authEpe',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api' }),
    tagTypes: ['authEpe'],
    endpoints: (builder: any) => ({
        signup: builder.mutation({
            query: (user: IAuth) => ({
                url: '/signup/ntv',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['authEpe']

        }),
        signin: builder.mutation({
            query: (user: IAuth) => ({
                url: '/signin/ntv',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['authEpe']
        }),
        getUserByEmail: builder.query({
            query: (email: string) => `/epe-users/${email}/detail`,
            providesTags: ['authEpe']
        }),
        sendEmailResetPass: builder.mutation({
            query: (user: any) => ({
                url: `/epe-users/forgotpassword/?email=${user.email}`,
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['authEpe']
        }),
        resetPassword: builder.mutation({
            query: (user: any) => ({
                url: '/epe-users/resetpassword',
                method: 'PUT',
                body: user
            }),
            invalidatesTags: ['authEpe']
        }),
        changePassword: builder.mutation({
            query: (user: any) => ({
                url: '/epe-users/changepassword',
                method: 'PUT',
                body: user
            }),
            invalidatesTags: ['authEpe']
        })
    })
})

export const {
    useSignupMutation,
    useSigninMutation,
    useSendEmailResetPassMutation,
    useResetPasswordMutation,
    useGetUserByEmailQuery,
    useChangePasswordMutation
} = authApi