import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";

export default function Home() {
  return (
    <div className="home-page">
      <div className="header">
        <img src="./logo.png" alt="" />
        <h1>Tic Tac Toe</h1>
      </div>
      <Link to="/game">
        <button>Play with friend</button>
      </Link>
      <br />
      <Link to="/vscomputer">
        <button>Play with Computer</button>
      </Link>
    </div>
  );
}
