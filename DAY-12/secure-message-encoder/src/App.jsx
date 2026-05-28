import "./App.css";
import Encoder from "./components/Encoder";
import Encryptor from "./components/Encryptor";

function App() {
  return (
    <div className="container">
      <h1>🔐 Secure Message Encoder</h1>

      <div className="card-container">
        <Encoder />
        <Encryptor />
      </div>
    </div>
  );
}

export default App;