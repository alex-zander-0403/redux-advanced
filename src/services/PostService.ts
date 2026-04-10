import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../models/IPost";

//
export const postAPI = createApi({
  // Уникальное имя для этого API в глобальном store
  reducerPath: "postApi",

  // Базовая конфигурация для всех запросов (query)
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),

  // 1 - ОБЪЯВЛЯЕМ ТЕГИ: какие типы данных у нас есть
  tagTypes: ["Post"],

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

      // 2 - QUERY: получаем данные и указываем к какому тегу они относятся
      // RTK Query сохраняет данные и помечает их тегом "Post"
      providesTags: (result) => ["Post"],
    }),

    // post
    createPost: build.mutation<IPost, IPost>({
      query: (newPost) => ({
        url: `/posts`,
        method: "POST",
        body: newPost,
      }),

      // 3. MUTATION: изменяем данные и указываем какие теги нужно обновить
      // RTK Query видит устаревшие данные с тегом 'Post' и удаляет их из кеша
      invalidatesTags: ["Post"],
    }),
  }),
});

// <IPost[], number>
// первый арг - что возвращаем
// второй - что будет принимать сгенерированный хук
