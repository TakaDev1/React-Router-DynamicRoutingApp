import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        <li>
          <Link to="/user/1">1st</Link>
        </li>
        <li>
          <Link to="/user/2">2nd</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
