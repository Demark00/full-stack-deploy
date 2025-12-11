import { useState, useEffect } from "react"

function App() {
  const [message, setMessage] = useState("");

  const fetchMessage = async () => {
    try {
      const request = await fetch("http://localhost:8000/api/message");
      const response = await request.json()
      setMessage(response.message);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMessage();
  }, [])

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Welcome to My First Virtual Server Frontend!</h1>
        <p>Data from Backend: {message}</p>
      </div>
    </>
  )
}

export default App
