import { useAppSelector } from "./hooks/redux";
import "./App.css";

//
function App() {
  //
  const {} = useAppSelector((state) => state);

  //
  return (
    <div className="App">
      <p>hello world!</p>
    </div>
  );
}

export default App;
