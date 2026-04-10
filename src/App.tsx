import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { userSlice } from "./store/reducers/UserSlice";
import { useEffect } from "react";
import { fetchUsers } from "./store/reducers/ActionCreators";
import "./App.css";
import { PostContainer } from "./components/PostContainer/PostContainer";

//
function App() {
  const { users, isLoading, error } = useAppSelector(
    (state) => state.userReducer,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  //
  return (
    <div className="App">
      <h1>Hello, users!</h1>
      {JSON.stringify(users, null, 2)}

      <PostContainer />
    </div>
  );
}

export default App;
