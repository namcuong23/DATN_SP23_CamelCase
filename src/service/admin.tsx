import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {User} from "../interface/admin/users";

export const adminApi = createApi({
    reducerPath: 'admin',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api' }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => '/users',
            providesTags: ['User']
        }),
    })
});
export const {
    useGetUsersQuery,
} = adminApi