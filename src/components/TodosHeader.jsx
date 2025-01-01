import React from "react";

const TodosHeader = ({ selector }) => {
  return (
    <div className="card-header">
      <h1>Todos: {selector}</h1>
    </div>
  );
};

export default TodosHeader;
