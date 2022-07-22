import React from "react";

const UnosTaska = ({ handleInputChange, handleAddTask, input }) => {
  return (
    <div>
      <input type='text' value={input} onChange={handleInputChange} />
      <button onClick={handleAddTask}>Dodaj task</button>
    </div>
  );
};

export default UnosTaska;
