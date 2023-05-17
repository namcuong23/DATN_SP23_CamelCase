import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

interface IAuth {
    email: string,
    password: string
}


export const authEprApi = createApi({
    reducerPath: 'authEpr',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api' }),
    tagTypes: ['authEpr'],
    endpoints: (builder: any) => ({
        registerWithEmployer: builder.mutation({
            query: (user: IAuth) => ({
                url: '/signup/ntd',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['authEpr']
        }),
        LoginWithEmployer: builder.mutation({
            query: (user: IAuth) => ({
                url: '/signin/ntd',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['authEpr']
        }),
        getUserEprByEmail: builder.query({
            query: (email: string) => `/epr-users/${email}/detail`,
            providesTags: ['authEpr']
        })
    })
})

export const {
    useRegisterWithEmployerMutation,
    useLoginWithEmployerMutation,
    useGetUserEprByEmailQuery,
} = authEprApi