import React, { useState } from "react";
import Cell from "./Cell";
import "./dashboard.css";
import Swal from "sweetalert2";

let array = [null, null, null, null, null, null, null, null, null];

let x_data = [];
let o_data = [];
let winnerData = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
let x_result;
let o_result;

export default function Dashboard() {
  const [grid, setGrid] = useState(array);
  const [chance, setChance] = useState(true);

  if (!chance) {
    let random = Math.ceil(Math.random() * 8);
    setTimeout(() => {
      let copy = [...grid];
      if (!copy[random]) {
        if (chance) {
          copy[random] = "X";
          x_data.push(random + 1);
        } else {
          copy[random] = "0";
          o_data.push(random + 1);
        }
        setGrid(copy);
        setChance(!chance);
        console.log(chance);
      }
    }, 3000);
  }

  const handleChange = (index) => {
    let copy = [...grid];
    if (!copy[index]) {
      if (chance) {
        copy[index] = "X";
        x_data.push(index + 1);
      }
      setGrid(copy);
      setChance(!chance);
    }
    console.log(x_data.length);

    if (x_data.length >= 3) {
      for (const item of winnerData) {
        x_result = item.every((val) => x_data.includes(val));
        console.log("x:" + x_result);
        if (x_result) {
          Swal.fire({
            icon: "success",
            title: "Winner",
            text: "Player X has won",
          }).then(() => {
            setGrid(array);
            x_data = [];
            x_result = null;
            o_data = [];
            o_result = null;
          });
        }
      }
    }

    if (o_data.length >= 3) {
      for (const item of winnerData) {
        o_result = item.every((val) => o_data.includes(val));
        console.log("o:" + o_result);
        if (o_result) {
          Swal.fire({
            icon: "success",
            title: "Winner",
            text: "Player O has won",
          }).then(() => {
            setGrid(array);
            o_data = [];
            o_result = null;
            x_data = [];
            x_result = null;
          });
        }
      }
    }
    let a = [];
    for (let i = 0; i <= 8; i++) {
      if (grid[i]) {
        a.push(i);
        if (a.length == 8) {
          Swal.fire({
            icon: "erroe",
            title: "No-one WIN ",
            text: "no Player has won",
          });
        }
      }
      console.log(a);
    }
  };
  console.log("x:" + x_data, "o:" + o_data);
  return (
    <div className="dashboard">
      <div className="parent">
        {grid.map((a, index) => (
          <Cell key={index} id={index} mark={a} onTap={handleChange} />
        ))}
      </div>
    </div>
  );
}
