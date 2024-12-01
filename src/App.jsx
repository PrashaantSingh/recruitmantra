import {useState } from "react";
import Login from "./components/Login";
import Home from "./components/Home";


export default function App() {
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      {isLoggedIn ? (
        <Home userName={userName} setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} />
      ) : (
        <Login setUserName={setUserName} setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}
