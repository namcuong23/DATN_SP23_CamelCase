import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import ICv from "../interface/cv"

export const cvApi: any = createApi({
    reducerPath: 'cvApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api' }),
    tagTypes: ['Cv'],
    endpoints: (builder) => ({
        getCvs: builder.query<ICv[], void>({
            query: () => '/cvs',
            providesTags: ['Cv']
        }),
        getCvsByPostId: builder.query<ICv[], string>({
            query: (postId: string) => `/cvs/${postId}`,
            providesTags: ['Cv']
        }),
        getCv: builder.query<ICv, string>({
            query: (id: string) => `/cvs/${id}/detail`,
            providesTags: ['Cv']
        }),
        addCv: builder.mutation({
            query: (profile: ICv) => ({
                url: `/cvs`,
                method: "POST",
                body: profile
            }),
            invalidatesTags: ['Cv']

        }),
        removeCv: builder.mutation({
            query: (id: string) => ({
                url: `/cvs/${id}`,
                method: 'DELETE',
                credentials: 'omit'
            }),
            invalidatesTags: ['Cv']
        })
    })
})

export const {
    useGetCvsQuery,
    useGetCvsByPostIdQuery,
    useGetCvQuery,
    useAddCvMutation,
    useRemoveCvMutation,
} = cvApi