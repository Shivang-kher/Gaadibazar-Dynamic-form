// // redux/reducers.js
// import { combineReducers } from 'redux';

// const initialState = {
//   formData: {}, // Initial state to store form data
// };

// // const rootReducer = (state = initialState, action) => {
// //   switch (action.type) {
// //     case 'UPDATE_FORM_DATA':
// //       return {
// //         ...state,
// //         formData: {
// //           ...state.formData,
// //           [action.payload.categoryKey]: action.payload.formData,
// //         },
// //       };
// //     default:
// //       return state;
// //   }
// // };
// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'UPDATE_FORM_DATA':
//       return {
//         ...state,
//         formData: {
//           ...state.formData,
//           [action.payload.categoryKey]: action.payload.formData,
//         },
//       }
//     case 'SEND_FORM_DATA_SUCCESS':
//       // Handle success action (if needed)
//       return state;
//     case 'SEND_FORM_DATA_ERROR':
//       // Handle error action (if needed)
//       return state;
//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   app: rootReducer,
// });

// // reducers.js
// Define Redux reducers for handling CRUD actions
const initialState = {
  data: [],
  loading: false,
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_DATA_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    // Implement other CRUD action types similarly...
    default:
      return state;
  }
};

export default dataReducer;

