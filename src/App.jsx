import React from "react";
import TodosForm from "./components/TodosForm";
import TodosHeader from "./components/TodosHeader";
import TodoItemss from "./components/TodoItemss";
import { TodoFooter } from "./components/TodoFooter";
import { useSelector } from "react-redux";
import { Toaster } from "sonner";

const App = () => {
  const selector = useSelector((state) => state.todoSlice);
  return (
    <div className="container">
      <Toaster position="top-right" richColors />
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card mt-5">
            <TodosHeader selector={selector.length} />
            <div className="card-body">
              <TodosForm />
            </div>
            <ul className="list-group list-group-flush">
              <TodoItemss selector={selector} />
            </ul>
            <TodoFooter selector={selector} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
