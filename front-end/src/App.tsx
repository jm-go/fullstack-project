import { useState } from "react";
import Header from "./components/Header/Header";
import "./main.scss";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
    </>
  );
};

export default App;
