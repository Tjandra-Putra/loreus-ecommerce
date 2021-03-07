const initialState = {
  supportFormData: {
    message: "",
    email: "",
    category: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUPPORT_FORM_SUBMIT":
      return {
        ...state,
        supportFormData: {
          ...state.supportFormData,
          message: action.payload.message,
          email: action.payload.email,
          category: action.payload.category,
        },
      };
  }

  // if (action.type === 'INCREMENT') {
  // 	return {
  // 		...state,
  // 		counter: state.counter + 1
  // 	};
  // }

  // if (action.type === 'ADD') {
  // 	return {
  // 		...state,
  // 		counter: state.counter + action.val
  // 	};
  // }

  return state;
};

export default reducer;
