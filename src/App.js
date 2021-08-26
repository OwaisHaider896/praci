import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [users, setUsers] = useState("");
  const [userData, setUserData] = useState([]);

  const click = async () => {
    const response = await fetch(
      `https://api.github.com/search/users?q=${users}`
    );
    const { items } = await response.json();
    // console.log(items);

    setUserData(items);
  };

  return (
    <div className="App">
      <h1>GitHub Users </h1>
      <input
        type="text"
        className=" "
        value={users}
        placeholder="Search Users"
        onChange={(e) => {
          setUsers(e.target.value);
        }}
      />
      <button onClick={click}>Search</button>
      <ul>
        {userData.map((value) => (
          <li>
            <p>{value.login}</p>
            <img src={value.avatar_url} alt={value.login} />
          </li>
        ))}
      </ul>
    </div>
  );
}
