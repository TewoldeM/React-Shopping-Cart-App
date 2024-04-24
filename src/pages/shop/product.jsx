import React, { useContext } from 'react'
import {Shopcontext} from "../../context/shop-context"
export const Product = (props) => {
  const {id,productName,price,productImage}=props.data;
  const {addToCart,cartItems }=useContext(Shopcontext);
  
  const cartItemsAmount=cartItems[id]
  return (
<div className='product'>

<img src={productImage}  alt='product Name'/>

<div className='description' >
<p>
<b>{productName}</b>
</p>
<p>${price}</p>
</div>
<button className="addtocartbtn" onClick={()=> addToCart(id)}>
  Add To Cart{cartItemsAmount >0 && <>({cartItemsAmount})</>}</button>
</div>

    
  )
}

