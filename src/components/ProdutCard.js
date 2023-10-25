import React from "react";
 
function ProdutCard({title, image, price, category}) {
  return (
    <div class="col-md-4 col-sm-6 mb-md-4 mb-2" >
      <div class="card" style={{alignItems:"center"}} >
        <img src={image} style={{padding:"10px"}} width={"25%"} height={100}   alt="" />
        <div class="card-body" style={{padding:"0"}}>
        Category: {category}
        </div>
         <div class="card-body">
        Price:  {price}
        </div>
      </div>
    </div>
  );
}




export default ProdutCard;
