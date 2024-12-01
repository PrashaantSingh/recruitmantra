export default function Home({ userName, setUserName, setIsLoggedIn }) {
  function handleLogout(e) {
    e.preventDefault();
    setIsLoggedIn(false);
    setUserName("");
  }

  return (
    <div className="home flex flex-col items-center">
      <h1>{`hello ${userName} ,you are logged in succesfully!`}</h1>
      <button className="log-out" onClick={handleLogout}>Log out</button>
    </div>
  );
}
