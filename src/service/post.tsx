import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import IPost from "../interface/post"

export const postApi: any = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api' }),
    tagTypes: ['post'],
    endpoints: (builder) => ({
        getPosts: builder.query<IPost[], void>({
            query: () => '/posts',
            providesTags: ['post']
        }),
        getPost: builder.query<IPost, string>({
            query: (id: string) => `/posts/${id}`,
            providesTags: ['post']
        }),
        addPost: builder.mutation<IPost, Omit<IPost, '_id'>>({
            query: (post: IPost) => ({
                url: '/posts',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['post']
        }),
        editPost: builder.mutation<IPost, Partial<IPost> & Pick<IPost, '_id'>>({
            query: (post: IPost) => ({
                url: `/posts/${post._id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['post']
        }),
        removePost: builder.mutation({
            query: (id: string) => ({
                url: `/posts/${id}`,
                method: 'DELETE',
                credentials: 'omit'
            }),
            invalidatesTags: ['post']
        })
    })
})

export const {
    useGetPostsQuery,
    useGetPostQuery,
    useAddPostMutation,
    useEditPostMutation,
    useRemovePostMutation,
} = postApi