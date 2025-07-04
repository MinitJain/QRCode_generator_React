import { useState } from "react";
import QRCode from "react-qr-code"; // ✅ This works with Vite

const QRcodeGenerator = () => {
  const [qrCode, setQrcode] = useState("");
  const [input, setInput] = useState("");

  const handleGenerateQRCode = () => {
    setQrcode(input);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleGenerateQRCode();
    }
  };

  return (
    <>
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          value={input}
          type="text"
          name="qr-code"
          placeholder="Enter your value here"
        />
        <button disabled={input.trim() === ""} onClick={handleGenerateQRCode}>
          Generate
        </button>
      </div>
      <div style={{ marginTop: "20px" }}>
        {qrCode && (
          <QRCode
            value={qrCode}
            size={200}
            style={{ background: "white", padding: "10px" }}
          />
        )}
      </div>
    </>
  );
};

export default QRcodeGenerator;
