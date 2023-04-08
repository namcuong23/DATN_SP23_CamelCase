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
            query: (email: string) => `/profiles/${email}`,
            providesTags: ['profile']
        }),
        addProfile: builder.mutation({
            query: (profile: ImanageProfile) => ({
                url: `/profiles`,
                method: "POST",
                body: profile
            }),
            invalidatesTags: ['profile']

        }),
        removeProfile: builder.mutation({
            query: (id: string) => ({
                url: `/profiles/${id}`,
                method: 'DELETE',
                credentials: 'omit'
            }),
            invalidatesTags: ['profile']
        })
    })
})

export const {
    useGetProfilesQuery,
    useGetProfileQuery,
    useAddProfileMutation,
    useRemoveProfileMutation,
} = profileApi