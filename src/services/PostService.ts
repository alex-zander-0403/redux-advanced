import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../models/IPost";

//
export const postAPI = createApi({
  // Уникальное имя для этого API в глобальном store
  reducerPath: "postApi",

  // Базовая конфигурация для всех запросов (query)
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),

  // эндпоинт для получения данных (query-get, mutation-POST/PUT/DELETE)
  endpoints: (build) => ({
    // GET запрос
    fetchAllPosts: build.query<IPost[], number>({
      query: (limit = 3) => ({
        url: `/posts`,
        // params: {
        //   _limit: limit,
        // },
      }),
    }),

    // post
    createPost: build.mutation<IPost, IPost>({
      query: (data) => ({
        url: `/posts`,
        method: "POST",
        body: newPost,
      }),
    }),
  }),
});

// <IPost[], number>
// первый арг - что возвращаем
// второй - что будет принимать сгенерированный хук
