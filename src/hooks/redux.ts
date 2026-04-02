import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch } from "react-redux";

// кастомный уже типизированный useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

// кастомный уже типизированный useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
