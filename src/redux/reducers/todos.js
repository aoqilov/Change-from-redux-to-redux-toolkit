// const initialState = [];

// const todoReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_TODO":
//       return [...state, action.payload];
//     case "REMOVE":
//       return state.filter((filter) => filter.id !== action.payload.id);
//     case "DONE":
//       return state.map((item) => {
//         if (item.id === action.payload.id) {
//           return {
//             ...item,
//             isDone: action.payload.isDone,
//           };
//         } else {
//           return item;
//         }
//       });
//     case "SAVE_LOCAL":
//       return [...action.payload]; // Faqat yangi holatni qaytaradi

//     default:
//       return state;
//   }
// };

// export default todoReducer;
