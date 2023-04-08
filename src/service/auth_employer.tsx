import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

interface IAuth {
    email: string,
    password: string
}

export const authEprApi = createApi({
    reducerPath: 'authEprApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api' }),
    tagTypes: ['AuthEpr'],
    endpoints: (builder: any) => ({
        registerWithEmployer: builder.mutation({
            query: (user: IAuth) => ({
                url: '/signup/ntd',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['AuthEpr']
        }),
        LoginWithEmployer: builder.mutation({
            query: (user: IAuth) => ({
                url: '/signin/ntd',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['AuthEpr']
        }),
        getUserEprByEmail: builder.query({
            query: (email: string) => `/epr-users/${email}`,
            providesTags: ['auth']
        })
    })
})

export const {
    useRegisterWithEmployerMutation,
    useLoginWithEmployerMutation,
    useGetUserEprByEmailQuery
} = authEprApi