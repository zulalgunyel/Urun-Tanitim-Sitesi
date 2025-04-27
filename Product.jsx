import "./Product.css";
import React from 'react'

const Product = ({product: {name,color,name,discount,
  img,price}}) => {
  return (
    <div className="product">
      <img src={'/img/${img}'} alt="" />
      <h3 className="name">{name}</h3>
      
      <div className="info">
        <span className="color">{color}</span>
      <span className="price">{price}</span></div>

      <span className="discount">
        {
          discount && <span className="discount">İndirimde</span>
        }
      </span>
    </div>
  )
}

export default Product
