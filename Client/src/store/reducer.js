import * as actionTypes from "./actions";

// =========== GLOBAL STATE ===========
const initialState = {
  supportFormData: {
    message: "",
    email: "",
    category: "",
  },
  selectedItems: [], // contains a list of objects
  totalPrice: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SUPPORT_FORM_SUBMIT:
      return {
        ...state,
        supportFormData: {
          ...state.supportFormData,
          message: action.payload.message,
          email: action.payload.email,
          category: action.payload.category,
        },
      };

    case actionTypes.ADD_TO_CART:
      // Default value of quantity is 1 when cart is empty
      if (state.selectedItems.length === 0) {
        action.product.quantity = 1;
      }

      // if item has already been added to shopping cart, only updates the quantity
      if (state.selectedItems.some((item) => item.id === action.product.id)) {
        const itemIndex = state.selectedItems.findIndex((item) => {
          return item.id === action.product.id;
        });

        action.product.quantity += 1;

        const itemArray = [...state.selectedItems];
        itemArray[itemIndex] = action.product;

        return {
          ...state,
          selectedItems: itemArray,
        };
      } else {
        // Adding new items to shopping cart
        action.product.quantity = 1;
        let array = [...state.selectedItems];
        array.push(action.product);

        return {
          ...state,
          selectedItems: array,
        };
      }

    case actionTypes.EDIT_CART_QUANTITY:
      // index value of item
      const itemIndex = state.selectedItems.findIndex((item) => {
        return item.id === action.itemId;
      });

      const itemObj = { ...state.selectedItems[itemIndex] };

      itemObj.quantity = action.event;

      const itemArray = [...state.selectedItems];
      itemArray[itemIndex] = itemObj;

      return {
        ...state,
        selectedItems: itemArray,
      };

    case actionTypes.REMOVE_CART_ITEM:
      const allItems = [...state.selectedItems];
      allItems.splice(action.index, 1);

      return {
        ...state,
        selectedItems: allItems,
      };
  }

  return state;
};

export default reducer;
