import React from "react";
import { useDispatch } from "react-redux";
import { editTodo, removeTodo } from "../toolkite/reducer/reducer";
import { toast } from "sonner";

const TodoItemss = ({ selector }) => {
  const dispatch = useDispatch();
  return (
    <>
      {selector.map((item, idx) => {
        return (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={idx}
          >
            <div>
              <input
                className="form-check-input me-2"
                type="checkbox"
                id="flexCheckDefault"
                checked={item.isDone}
                onChange={() => {
                  dispatch(editTodo(item.id));
                  toast.info("edit, checkbox");
                }}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                {item.text}
              </label>
            </div>
            <button
              className="btn btn-danger"
              onClick={() => {
                dispatch(removeTodo(item.id));
                toast.error("deleted, but will reappear if you don't save it");
              }}
            >
              Remove
            </button>
          </li>
        );
      })}
    </>
  );
};

export default TodoItemss;
