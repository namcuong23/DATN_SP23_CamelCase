import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import IAdmin_voucher from "../interface/admin_voucher"

export const voucherApi: any = createApi({
    reducerPath: 'voucherApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api' }),
    tagTypes: ['voucher'],
    endpoints: (builder) => ({
        getVouchers: builder.query<IAdmin_voucher[], void>({
            query: () => '/vouchers',
            providesTags: ['voucher']
        }),
        getVoucher: builder.query<IAdmin_voucher, string>({
            query: (id: string) => `/vouchers/${id}`,
            providesTags: ['voucher']
        }),
        addVoucher: builder.mutation<IAdmin_voucher, Omit<IAdmin_voucher, '_id'>>({
            query: (voucher: IAdmin_voucher) => ({
                url: '/vouchers',
                method: 'POST',
                body: voucher
            }),
            invalidatesTags: ['voucher']
        }),
        editVoucher: builder.mutation<IAdmin_voucher, Partial<IAdmin_voucher> & Pick<IAdmin_voucher, '_id'>>({
            query: (voucher: IAdmin_voucher) => ({
                url: `/vouchers/${voucher._id}`,
                method: 'PUT',
                body: voucher
            }),
            invalidatesTags: ['voucher']
        }),
        removeVoucher: builder.mutation({
            query: (id: string) => ({
                url: `/vouchers/${id}`,
                method: 'DELETE',
                credentials: 'omit'
            }),
            invalidatesTags: ['voucher']
        })
    })
})

export const {
    useGetVouchersQuery,
    useGetVoucherQuery,
    useAddVoucherMutation,
    useEditVoucherMutation,
    useRemoveVoucherMutation,
} = voucherApi