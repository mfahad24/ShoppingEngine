import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import ListView from "./components/ListView/ListView";
import AssignmentView from "./components/AssignmentView/AssignmentView";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Nav />
      <ListView />
      <AssignmentView />
    </div>
  );
}

export default App;
