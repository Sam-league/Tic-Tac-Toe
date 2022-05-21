import React, { useState } from "react";

let arr = [];

export default function Cell({ key, id, mark, onTap }) {
  const [ID, setID] = useState(null);

  const handleClick = (e) => {
    arr.push(e.target.id);
    setID(e.target.id);

    console.log(arr);
  };

  const renderImage = (value) => {
    if (value === "X") return "./x-mark.png";
    if (value === "0") return "./o-mark.png";
    return value;
  };

  return (
    <div>
      <div className="div1 cell" onClick={() => onTap(id)}>
        {/* {arr.map((a) => (ID === a ? <img src={props.mark} /> : ""))} */}
        <img src={renderImage(mark)} alt="" />
      </div>
    </div>
  );
}
