import { ActionTypes } from "../contents/action-types"
export const setProduct = (products) =>{
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectedProducts = (product) =>{
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
} 

export const removeSelectedProducts = () =>{
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
} 
}

export const addToCart = (cartProduct) =>{
    return {
        type: ActionTypes.CART_PRODUCT,
        payload: cartProduct,
    }
    
}

export const removeFromCart = (productId) =>{
    return {
        type: ActionTypes.REMOVE_PRODUCT_CART,
        payload: productId
    }
}

export const updateCartCount = (count) =>{
    return {
        type : ActionTypes.UPDATE_CART_COUNT,
        payload: count
    }
}