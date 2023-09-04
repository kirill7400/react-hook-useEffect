import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import List from "./components/List.tsx";
import Details from "./components/Details.tsx";
import {useState} from "react";

function App() {
  const [info, setInfo] = useState({})

  const setParam = (v) => {
    setInfo(() => v)
  }

  return (
    <div className="App">
      <List info={ setParam }/>
      <Details info={ info }/>
    </div>
  );
}

export default App;
