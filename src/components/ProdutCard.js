import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
 
function ProdutCard() {
  const products = useSelector((state)=> state.allProducts.products)
  const renderList = products.map((item)=>{
    const {id, title, image, category, price} = item;
    return(
  <div className="col-md-4 col-sm-6 mb-md-4 mb-2 product__card" key={id}>
    <Link to={`/dashboard/product/${id}`}>
      <div className="card product_card_body" style={{alignItems:"center"}} >
        <img className="card_img_top" src={image} alt={title} />
        <div className="card-body" style={{padding:"0"}}>
        Category: {category}
        </div>
         <div className="card-body">
        Price:  {price}
        </div>
        {/* <button onClick={onClickView} className="view_button">View</button> */}
      </div>
      </Link>
    </div>
    );
  })
  return <>{renderList}</>
}




export default ProdutCard;
