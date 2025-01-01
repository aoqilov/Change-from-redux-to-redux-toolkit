// import { v4 as uuidv4 } from "uuid";

// const actTodo = (inpvalue) => {
//   return {
//     type: "ADD_TODO",
//     payload: {
//       ...inpvalue,
//     },
//   };
// };

// const actRemoveTodo = (id) => {
//   return {
//     type: "REMOVE",
//     payload: {
//       id,
//     },
//   };
// };

// const doneTodo = (doneObj) => {
//   return {
//     type: "DONE",
//     payload: {
//       ...doneObj,
//     },
//   };
// };

// const saveLocal = (todos) => {
//   return (dispatch) => {
//     if (Array.isArray(todos)) {
//       localStorage.setItem("todos", JSON.stringify(todos)); // Faqat massivni saqlaydi
//       dispatch({ type: "SAVE_LOCAL", payload: todos });
//     } else {
//     }
//   };
// };

// export { actTodo, doneTodo, actRemoveTodo, saveLocal };
