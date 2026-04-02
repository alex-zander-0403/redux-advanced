import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { userSlice } from "./store/reducers/UserSlice";
import "./App.css";

//
function App() {
  // достаем state с пом кастомного useSelector
  const { count } = useAppSelector((state) => state.userReducer);
  // достаем action из slice
  const { countIncrement } = userSlice.actions;
  // dispatch
  const dispatch = useAppDispatch();

  //
  return (
    <div className="App">
      <h1>hello world!</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(countIncrement(1))}>PLUS 1</button>
    </div>
  );
}

export default App;
