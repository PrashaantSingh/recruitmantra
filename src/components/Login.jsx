import logo from "../../public/logo_RM.png";
import { useState, useEffect } from "react";
export default function Login({ setIsLoggedIn, setUserName }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("guptasatyamml@gmail.com");
  const [password, setPassword] = useState("12345");
  const [error, setError] = useState("");

  useEffect(() => {
    login();
  }, [isSubmitted]);

  async function login() {
    if (!isSubmitted) return;

    try {
      setUserName("");
      setIsLoggedIn(false);
      setError("");

      //Due to CORS ERROR i have to create a proxy server (by the name ->"user") in vite.config.js which will make the post request to the original url: - http://15.206.133.74/user
      const req = await fetch("/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      console.log(" req before json()>>", req);
      const user = await req.json();
      console.log("req after parsing>>", user);
      if (user.message && !user.data?.token) throw new Error(user.message);
      setUserName(user.data.name);
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setIsSubmitted(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <div className="container flex justify-around align-center">
      <div className="left">
        <img src={logo} alt="" />
      </div>
      <div className="right flex flex-col gap">
        <h1>RecruitMantra</h1>
        <h2>LOG-IN</h2>
        <div>
          <form className="flex flex-col gap">
            <input
              type="email"
              name="email"
              id=""
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="error-message">{error}</p>}
            <button onClick={handleSubmit}>continue</button>
          </form>
        </div>
      </div>
    </div>
  );
}
