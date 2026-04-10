import axios from "axios";
import { AppDispatch } from "../store";
import { IUser } from "../../models/IUser";
import { userSlice } from "./UserSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

//
// ЗАКОММЕНТИРОВАННЫЙ РУЧНОЙ THUNK (для сравнения)

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.usersFetching());

//     const response = await axios.get<IUser[]>(
//       "https://jsonplaceholder.typicode.com/users",
//     );

//     setTimeout(() => {
//       dispatch(userSlice.actions.usersFetchingSuccess(response.data));
//     }, 500);
//   } catch (error) {
//     const e = error as Error;
//     dispatch(userSlice.actions.usersFetchingError(e.message));
//   }
// };

// СОЗДАНИЕ АСИНХРОННОГО THUNK С ПОМОЩЬЮ createAsyncThunk

export const fetchUsers = createAsyncThunk(
  // 1-й аргумент: тип экшена (префикс)
  "user/fetchAll",
  // 2-й аргумент: асинхронная функция-создатель payload
  async (_, thunkAPI) => {
    try {
      // const response = await axios.get<IUser[]>(
      //   "https://jsonplaceholder.typicode.com/users",
      // );

      // Возвращаем полученные данные
      // Они станут payload для fulfilled экшена
      // return response.data;

      return [];
    } catch (error) {
      return thunkAPI.rejectWithValue("ошибка 1");
    }
  },
);
