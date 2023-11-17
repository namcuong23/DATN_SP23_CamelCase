import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import {Inotification} from "../interface/notification";

export const notificationApi = createApi({
    reducerPath: 'notification',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api' }),
    tagTypes: ['notification'],
    endpoints: (builder) => ({
        getNotificationByEmail: builder.query<Inotification[], string>({
            query: (email: string) => `/notificationsByEmail/${email}`,
            providesTags: ['notification']
        }),
        getNotificationById: builder.query<Inotification, string>({
            query: (id: string) => `/notifications/${id}`,
            providesTags: ['notification']
        })
    })
})

export const {
    useGetNotificationByIdQuery,
    useGetNotificationByEmailQuery,
} = notificationApi