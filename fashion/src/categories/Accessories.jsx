import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider"; 
import "./skincare.css";

const products = [
  {
    id: 1,
    name: "Tropfen Ohrringe Gold",
    image:"https://i.pinimg.com/736x/38/74/2c/38742ce0143394be9a63bf949c658445.jpg",
    price: 35,
  },
  {
    id: 2,
    name: "Cubojue Unisex Reading Glasses",
    image: "https://i.pinimg.com/736x/89/62/f9/8962f909bbeacc84530bedb569a7a346.jpg",
    price: 18,
  },
  {
    id: 3,
    name: "Tassel Hair Clip",
    image: "https://i.pinimg.com/736x/60/dc/b1/60dcb10cee7cddcdea53d7d9f3a54a1d.jpg",
    price: 5
  },
  {
    id: 4,
    name: "Satin Ribbon Hair Tie",
    image: "https://i.pinimg.com/736x/07/59/64/075964cf90bd968a64b34ef1c52c3045.jpg",
    price: 14,
  },
  {
    id: 5,
    name: "Vlando Jewelry Box",
    image: "https://i.pinimg.com/736x/3b/c9/d3/3bc9d3ac6039e9caa6cadbb949bf21ee.jpg",
    price: 20,
  },
];

const Accessories = () => {
  const { addToCart } = useContext(CartContext); 

  return (
    <div className="container">
      <h1>Acessories</h1>
      <div className="products">
        {products.map((p) => (
          <div key={p.id} className="product">
            <img src={p.image} alt={p.name} width="200" />
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accessories;
