import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../toolkite/reducer/reducer";
import { toast, Toaster } from "sonner";

const TodosForm = () => {
  const dispatch = useDispatch();
  const [inpValue, setInpValue] = useState("");
  const selector = useSelector((state) => state.todoSlice);

  const handleAdd = (e) => {
    e.preventDefault();
    let sendObj = {
      id: new Date().getSeconds(),
      text: inpValue,
      isDone: false,
    };
    if (sendObj.text !== "") {
      dispatch(addTodo(sendObj));
      toast.success("successfully added");
      setInpValue("");
    }
  };

  return (
    <form className="mb-3 d-flex justify-content-between align-items-center">
      <div>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="e.g. Buy eggs"
          onChange={(e) => setInpValue(e.target.value)}
          value={inpValue}
        />
      </div>
      <button className="btn btn-success" onClick={(e) => handleAdd(e)}>
        Add
      </button>
    </form>
  );
};

export default TodosForm;
