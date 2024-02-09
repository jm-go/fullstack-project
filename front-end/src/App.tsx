import { useState } from "react";
import Header from "./components/Header/Header";
import "./main.scss";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Sidebar/>
    </>
  );
};

export default App;
