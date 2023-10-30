import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "./assets/ViewProduct.css"
import { StarRate } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { selectedProducts, removeSelectedProducts, addToCart, updateCartCount } from '../redux/actions/productActions'
function ViewProducts() {
    const { productID } = useParams()
    const product = useSelector((state)=> state.product)
    const cartCount = useSelector((state)=> state.cart.count)
    const cartItems = useSelector((state) => state.cart.cart);

    console.log(cartCount);
    const { title, image, category, price, rating , description } = product;
    console.log(selectedProducts, "xyz");
    const dispatch = useDispatch()
    console.log(product,"product");
    const fetchProductData = async() =>{
      try {
      const res = await axios.get(`https://fakestoreapi.com/products/${productID}`)
      console.log(res, "id")
      dispatch(selectedProducts(res.data, "abcd"))
      }
      catch{
        alert("Error in Fetching Data!")
      }
    }
    useEffect(()=>{
      if(productID && productID !== "") fetchProductData()
      return () => {
         dispatch(removeSelectedProducts())
      }
    },[productID])

    const handleCart = () =>{
    const isProductInCart = cartItems.some((item)=> item.id === product.id)
    if(!isProductInCart){
      dispatch(addToCart(product))
      dispatch(updateCartCount(cartCount + 1))
    }
    }
  return (
    
    <div className='view_Product'>
        <div className="container">
          {Object.keys(product).length === 0 ? (
            <div>Loading</div>
          ):(
        <div className="row">
            <div className="col">
             <img className='view_product_image' src={image} alt={title} />
             <div className="view_cart_button">
            
             <button className='view_product_cart' onClick={handleCart}>Add To Cart</button>
             <button className='view_product_bye_now'>Buy Now</button>
             </div>
            </div>
            <div className="col">
            <div className='view_product_title'>Title: </div>
            <div className='view_product_rating'>{rating.count} <StarRate className='view_rate_star'/></div> <span>400 Ratings & 670 Reviews</span>
            <br />
             <div className='view_product_price'>₹{price}</div>
                <div className='view_product_title'>Category: {category}</div>
                <div>{description}</div>
            </div>
        </div>
        )}
        </div>
       
    </div>
  )
}

export default ViewProducts