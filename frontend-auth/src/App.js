import { useState } from "react";

function App() {
  const [secret, setSecret] = useState("");

  const handleLogin = async () => {
    const response = await fetch("http://localhost:3001/admin/login", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ secret }),
    });
    const data = await response.json();
    console.log(data);
    localStorage.setItem("adminToken", data.token);
  };
  return (
    <div>
      <input
        type="password"
        onChange={(e) => setSecret(e.target.value)}
        placeholder="Enter Secret"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
