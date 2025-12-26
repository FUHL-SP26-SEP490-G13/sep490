import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch API");
        }
        return res.json();
      })
      .then((data) => {
        setMessage(data.message);
        setSuccess(data.success);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      {/* Hiển thị message từ API */}
      <div className="card">
        {error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          <>
          <p>
            <strong>API message:</strong> {message}
            
          </p>
          {success && (
        <p style={{ color: "green", marginTop: "8px" }}>
          {success}
        </p>
        )}
        </>
        )}
      </div>

      {/* Phần demo cũ */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
