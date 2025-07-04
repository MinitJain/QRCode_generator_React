import { useState } from "react";
import QRcodeGenerator from "./Components/QRcode";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <QRcodeGenerator />
    </>
  );
}

export default App;
