import { createSlice, isAction, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { fetchUsers } from "./ActionCreators";

//
interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: "",
};

//
export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},

  // Современный способ записи extraReducers (рекомендуемый)
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isLoading = false;
        state.error = "";
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

//
export default userSlice.reducer;
