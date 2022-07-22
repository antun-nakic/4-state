import React from "react";

const ListaTodoova = ({ tasks }) => {
  return (
    <div>
      <h1>ListaTodoova</h1>
      <ul>
        {tasks.map((task, index) => {
          return <li key={index}>{task}</li>;
        })}
      </ul>
    </div>
  );
};

export default ListaTodoova;
