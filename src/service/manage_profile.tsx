import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import ImanageProfile from "../interface/manageProfile"

export const profileApi: any = createApi({
    reducerPath: 'profileApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api' }),
    tagTypes: ['profile'],
    endpoints: (builder) => ({
        getProfiles: builder.query<ImanageProfile[], void>({
            query: () => '/profiles',
            providesTags: ['profile']
        }),
        getProfile: builder.query<ImanageProfile, string>({
            query: (id: string) => `/profiles/${id}`,
            providesTags: ['profile']
        }),
        removeProfile: builder.mutation({
            query: (id: string) => ({
                url: `/profiles/${id}`,
                method: 'DELETE',
                credentials: 'omit'
            }),
            invalidatesTags: ['profile']
        }),
        refuseProfile: builder.mutation<ImanageProfile, Partial<ImanageProfile> & Pick<ImanageProfile, '_id'>>({
            query: (id: any) => ({
                url: `/profiles/${id}/tuchoi`,
                method: 'PUT',
                body: id
            }),
            invalidatesTags: ['profile']
        }),
        approveProfile: builder.mutation<ImanageProfile, Partial<ImanageProfile> & Pick<ImanageProfile, '_id'>>({
            query: (id: any) => ({
                url: `/profiles/${id}/duyet`,
                method: 'PUT',
                body: id
            }),
            invalidatesTags: ['profile']
        }),
    })
})

export const {
    useGetProfilesQuery,
    useGetProfileQuery,
    useRemoveProfileMutation,
    useApproveProfileMutation,
    useRefuseProfileMutation,
} = profileApi