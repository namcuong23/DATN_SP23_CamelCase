import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import IPost from "../interface/post"

export const postApi: any = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api' }),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        getPosts: builder.query<IPost[], void>({
            query: () => '/posts',
            providesTags: ['Post']
        }),
        getPost: builder.query<IPost, string>({
            query: (id: string) => `/posts/${id}`,
            providesTags: ['Post']
        }),
        addPost: builder.mutation<IPost, Omit<IPost, '_id'>>({
            query: (post: IPost) => ({
                url: '/posts',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        editPost: builder.mutation<IPost, Partial<IPost> & Pick<IPost, '_id'>>({
            query: (post: IPost) => ({
                url: `/posts/${post._id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        removePost: builder.mutation({
            query: (id: string) => ({
                url: `/posts/${id}`,
                method: 'DELETE',
                credentials: 'omit'
            }),
            invalidatesTags: ['Post']
        }),
        approvePost: builder.mutation<IPost, Partial<IPost> & Pick<IPost, '_id'>>({
            query: (id: any) => ({
                url: `/posts/${id}/duyet`,
                method: 'PUT',
                body: id
            }),
            invalidatesTags: ['Post']
        }),
        refusePost: builder.mutation<IPost, Partial<IPost> & Pick<IPost, '_id'>>({
            query: (id: any) => ({
                url: `/posts/${id}/tuchoi`,
                method: 'PUT',
                body: id
            }),
            invalidatesTags: ['Post']
        }),
    })
})

export const formatDate = (inputDate: string): any => {
    const date = new Date(inputDate);
    const options = { timeZone: "Asia/Ho_Chi_Minh" };
    const day = date.toLocaleDateString("en-US", { day: "2-digit" });
    const month = date.toLocaleDateString("en-US", { month: "2-digit" });
    const year = date.toLocaleDateString("en-US", { year: "numeric" });
    const time = date.toLocaleTimeString("en-US", options);

    return { date: `${day}-${month}-${year}`, time };
}

export const {
    useGetPostsQuery,
    useGetPostQuery,
    useAddPostMutation,
    useEditPostMutation,
    useRemovePostMutation,
    useApprovePostMutation,
    useRefusePostMutation,
} = postApi