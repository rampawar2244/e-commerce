import React from 'react'
import { useParams } from 'react-router-dom'
import "./assets/ViewProduct.css"
import { StarRate } from '@mui/icons-material'
function ViewProducts() {
    const { id, title, category, image, price, description, rating } = useParams()
    
  return (
    <div className='view_Product'>
        <div className="container">
        <div className="row">
            <div className="col">
             <img className='view_product_image' src={decodeURIComponent(image)} alt="" />
             <div className="view_cart_button">

             <button className='view_product_cart'>Add To Cart</button>
             <button className='view_product_bye_now'>Buy Now</button>
             </div>
            </div>
            <div className="col">
            <div className='view_product_title'>Title: {title}</div>
            <div className='view_product_rating'>{rating} <StarRate className='view_rate_star'/></div> <span>400 Ratings & 670 Reviews</span>
            <br />
             <div className='view_product_price'>₹{price}</div>
                <div className='view_product_title'>Category: {category}</div>
                <div>{description}</div>
            </div>
        </div>
        </div>
       
    </div>
  )
}

export default ViewProducts