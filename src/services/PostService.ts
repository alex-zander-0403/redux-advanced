import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//
export const postAPI = createApi({
  // Уникальное имя для этого API в глобальном store
  reducerPath: "postApi",

  // Базовая конфигурация для всех запросов.
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),

  // Определяем эндпоинты
  endpoints: (build) => ({
    fetchAllPosts: build.query({
      // GET запрос
      query: () => ({
        url: "/posts",
      }),
    }),
  }),
});
