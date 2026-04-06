import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/UserSlice";
import { postAPI } from "../services/PostService";

//
const rootReducer = combineReducers({
  userReducer, // Обычный slice
  [postAPI.reducerPath]: postAPI.reducer, // RTK Query reducer
});

// Создание store с настройками
export function setupStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(postAPI.middleware), // Добавляем middleware
  });
}

// тип state, Используется в useSelector для типизации
export type RootState = ReturnType<typeof rootReducer>;
// Тип всего store, Нужен для типизации при передаче store в Provider
export type AppStore = ReturnType<typeof setupStore>;
// Тип store.dispatch, Используется в useDispatch для типизации отправляемых экшенов
export type AppDispatch = AppStore["dispatch"];
