import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import IOrder from "../../interface/employer/order";

export const orderApi = createApi({
    reducerPath: 'orderApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api' }),
    tagTypes: ['order'],
    endpoints: (builder: any) => ({
        getOrders: builder.query({
            query: () => '/orders',
            providesTags: ['order']
        }),
        getOrdersByUId: builder.query({
            query: (uid: string) => `/orders/${uid}/list`,
            providesTags: ['order']
        }),
        getOrder: builder.query({
            query: (id: string) => `/orders/${id}`,
            providesTags: ['order']
        }),
        createOrder: builder.mutation({
            query: (order: IOrder) => ({
                url: `/orders`,
                method: 'POST',
                body: order
            }),
            invalidatesTags: ['order']
        }),
        removeOrder: builder.mutation({
            query: (id: string) => ({
                url: `/orders/${id}`,
                method: 'DELETE',
                credentials: 'omit'
            }),
            invalidatesTags: ['order']
        }),
    })
})

export const {
    useGetOrdersQuery,
    useGetOrdersByUIdQuery,
    useGetOrderQuery,
    useCreateOrderMutation,
    useRemoveOrderMutation
} = orderApi