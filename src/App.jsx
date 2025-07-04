import { useState } from "react";
import "./App.css";
import QRcodeGenerator from "./Components/QRcode";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <QRcodeGenerator />
    </>
  );
}

export default App;
