import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../models/IPost";

//
export const postAPI = createApi({
  // Уникальное имя для этого API в глобальном store
  reducerPath: "postApi",

  // конфигурация для запросов
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),

  // Определяем эндпоинты
  endpoints: (build) => ({
    fetchAllPosts: build.query<IPost[], number>({
      // GET запрос
      query: (limit = 5) => ({
        url: "/posts",
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});
