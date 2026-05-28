import { useState } from "react";

function Encoder() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const encodeText = () => {
    setResult(btoa(text));
  };

  const decodeText = () => {
    try {
      setResult(atob(text));
    } catch {
      setResult("Invalid Encoded Text");
    }
  };

  const copyText = () => {
    navigator.clipboard.writeText(result);
    alert("Copied!");
  };

  return (
    <div className="card">
      <h2>📦 Encoding</h2>

      <textarea
        placeholder="Enter message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>Characters: {text.length}</p>

      <div className="btn-group">
        <button onClick={encodeText}>Encode</button>
        <button onClick={decodeText}>Decode</button>
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

export default Encoder;