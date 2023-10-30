import { ActionTypes } from "../contents/action-types";
const initialState = {
    products:[]
}
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {     
    case ActionTypes.SET_PRODUCTS:
      return {...state, products: payload};
    default:
      return state;
  }
};

// const initialSelectedProducts = 

export const selectProductReducer = (state = {}, {type, payload}) =>{
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return {...state, ...payload}

      case ActionTypes.REMOVE_SELECTED_PRODUCT:
        return {}
  
    default:
     
    return state
  }
}
const initialStateCart = {
  cart:[],
  count: 0
}
export const addToCartProductReducer = (state = initialStateCart, {type, payload})=>{
switch (type) {
  case ActionTypes.CART_PRODUCT:
    return {...state, cart: [...state.cart , payload],
    count: state.count + 1
    }
  case ActionTypes.REMOVE_PRODUCT_CART:
    return {
      ...state,
      cart: state.cart.filter(item => item.id !== payload)
    }
 
  default:
   return state
}
}