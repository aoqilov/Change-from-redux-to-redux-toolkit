import React from "react";
import { useDispatch } from "react-redux";
import { saveLocal } from "../toolkite/reducer/reducer";
import { toast } from "sonner";

export const TodoFooter = () => {
  const dispatch = useDispatch();
  return (
    <div className="card-footer">
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch(saveLocal());
          toast.success("saved local sotarage");
        }}
      >
        Save
      </button>
    </div>
  );
};
