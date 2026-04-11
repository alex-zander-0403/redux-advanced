import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../models/IPost";

//
export const postAPI = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["Post"],

  endpoints: (build) => ({
    //
    // GET -------------------

    fetchAllPosts: build.query<IPost[], number>({
      query: (limit = 3) => ({
        url: `/posts`,
        // params: {
        //   _limit: limit,
        // },
      }),

      providesTags: (result) => ["Post"],
    }),

    // POST -------------------

    createPost: build.mutation<IPost, IPost>({
      query: (newPost) => ({
        url: `/posts`,
        method: "POST",
        body: newPost,
      }),

      invalidatesTags: ["Post"],
    }),

    // UPDATE -------------------

    updatePost: build.mutation<IPost, IPost>({
      query: (updatedPost) => ({
        url: `/posts/${updatedPost.id}`,
        method: "PUT",
        body: updatedPost,
      }),

      invalidatesTags: ["Post"],
    }),

    // DELETE -------------------
    deletePost: build.mutation<IPost, IPost>({
      query: (postForDelete) => ({
        url: `/posts/${postForDelete.id}`,
        method: "DELETE",
      }),

      invalidatesTags: ["Post"],
    }),
  }),
});
