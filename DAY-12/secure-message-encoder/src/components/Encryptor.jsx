import { useState } from "react";

function Encryptor() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const encryptText = () => {
    let encrypted = "";

    for (let i = 0; i < text.length; i++) {
      encrypted += String.fromCharCode(text.charCodeAt(i) + 3);
    }

    setResult(encrypted);
  };

  const decryptText = () => {
    let decrypted = "";

    for (let i = 0; i < text.length; i++) {
      decrypted += String.fromCharCode(text.charCodeAt(i) - 3);
    }

    setResult(decrypted);
  };

  const copyText = () => {
    navigator.clipboard.writeText(result);
    alert("Copied!");
  };

  return (
    <div className="card">
      <h2>🔒 Encryption</h2>

      <textarea
        placeholder="Enter secret message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>Characters: {text.length}</p>

      <div className="btn-group">
        <button onClick={encryptText}>Encrypt</button>
        <button onClick={decryptText}>Decrypt</button>
      </div>

      <div className="output">
        <p>{result}</p>
      </div>

      <button className="copy-btn" onClick={copyText}>
        Copy Result
      </button>
    </div>
  );
}

export default Encryptor;