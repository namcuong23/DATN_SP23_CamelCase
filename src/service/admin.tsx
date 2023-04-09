import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../interface/admin/users";

interface IAuth {
    email: string;
    password: string
}

export const adminApi = createApi({
    reducerPath: 'admin',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api' }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        signupA: builder.mutation({
            query: (user: IAuth) => ({
                url: '/signup',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['User']

        }),
        getUsers: builder.query<User[], void>({
            query: () => '/users',
            providesTags: ['User']
        }),
        addUser: builder.mutation<User, Partial<User>>({
            query: (user: any) => ({
                url: `/users`,
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['User']
        }),
        updateUser: builder.mutation<User, Partial<User>>({
            query: ({ ...patch }) => ({
                url: `/users`,
                method: 'PATCH',
                body: patch
            }),
            invalidatesTags: ['User']
        })
    })
});
export const {
    useGetUsersQuery,
    useUpdateUserMutation,
    useSignupAMutation
} = adminApi