import React from "react";
 
function ProdutCard({title, image, price, category}) {
  return (
    <div className="col-md-4 col-sm-6 mb-md-4 mb-2 product__card" >
      <div className="card product_card_body" style={{alignItems:"center"}} >
        <img className="card_img_top" src={image}    alt="" />
        <div className="card-body" style={{padding:"0"}}>
        Category: {category}
        </div>
         <div className="card-body">
        Price:  {price}
        </div>
        <button className="view_button">View</button>
      </div>
    </div>
  );
}




export default ProdutCard;
