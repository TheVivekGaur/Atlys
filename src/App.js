import "./styles.css";
import React, { useState } from "react";
import LoginPopup from "./Home/LoginScreen/Modals/LoginPopup";
import BlogPost from "/Home/BlogPost";

export default function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      <h1>Home</h1>
      <button onClick={() => setVisible(true)}> open modal </button>

      <BlogPost />

      {visible && <LoginPopup visible={visible} setVisible={setVisible} />}
    </div>
  );
}
