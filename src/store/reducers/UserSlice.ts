import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

//
interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
  count: number;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: "",
  count: 0,
};

//
export const userSlice = createSlice({
  name: "user", // префикс для экшенов (будет 'user/countIncrement')
  initialState: initialState, // начальное состояние

  // объект с редюсерами (они же экшены)
  reducers: {
    countIncrement(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
  },
});

//
export default userSlice.reducer;
