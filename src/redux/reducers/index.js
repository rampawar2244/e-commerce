import { combineReducers } from "redux";
import { productReducer, selectProductReducer, addToCartProductReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectProductReducer,
    cart: addToCartProductReducer,
})

export default reducers