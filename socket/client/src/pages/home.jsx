import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

const Home = () => {
  const [message, setMessage] = useState("");
  const [chat, setchat] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setchat((prev) => [...prev, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  const handleSubmit = () => {
    socket.emit("send message", { message });
    setchat((prev) => [...prev, { message }]);
    setMessage("");
  };

  return (
    <>
      <h1>Welcome to the chat app</h1>
      Enter Message:{" "}
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSubmit}>Send</button>
      <hr />
      <div>
        {chat.map((key, index) => (
          <p key={index}>{key.message}</p>
        ))}
      </div>
    </>
  );
};

export default Home;
