import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api', //default, name of folder
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => '/posts',
            providesTags: ['Posts']
        }),
        getPost: builder.query({
            query: (id) => `/posts/${id}`,
            providesTags: ['Posts']
        }),
        getPostsByCategory: builder.query({
            query: (category) => `/posts/?category=${category}`,
            providesTags: ['Posts']
        }),
        addPost: builder.mutation({
            query: (post) => ({
                url: '/posts',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Posts']
        }),
        updatePost: builder.mutation({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'PATCH', //PATCH (updating part of record) or PUT (replacing full record)
                body: post
            }),
            invalidatesTags: ['Posts']
        }),
        deletePost: builder.mutation({
            query: ({ id }) => ({
                url: `/posts/${id}`,
                method: 'DELETE',
                body: id
            }),
            invalidatesTags: ['Posts']
        })
    })
})

export const {
    useGetPostsQuery,
    useGetPostQuery,
    useGetPostsByCategoryQuery,
    useAddPostMutation,
    useUpdatePostMutation,
    useDeletePostMutation
} = apiSlice