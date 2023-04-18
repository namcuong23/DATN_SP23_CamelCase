import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import IUserNTV from "../interface/user";

interface IAuth {
    email: string;
    password: string
}

export const authApi = createApi({
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
            query: (email: string) => `/epe-users/${email}`,
            providesTags: ['authEpe']
        })
        // getUsers: builder.query({
        //     query: () => `/users`,
        //     providesTags: ['auth']
        // })
    })
})

export const {
    useSignupMutation,
    useSigninMutation,
    useGetUserByEmailQuery
} = authApi