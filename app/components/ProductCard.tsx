import React from 'react'
import AddToCart from './AddToCart'

const ProductCard = ({ image="", name="" }) => {
  return (
    // <div className="bg-white rounded-lg shadow-md overflow-hidden p-4 hover:shadow-xl transition-shadow duration-300 my-5 flex flex-col items-center">
    //   <img src={image} alt={name || "Product"} className="w-full h-48 object-cover rounded-md mb-4" />
    //   {name && <h3 className="text-lg font-semibold mb-2 text-center">{name}</h3>}
      
    // </div>

    <div className="card bg-white w-96 shadow-sm">
      <figure>
        <img className='z-10' src={image} alt={name || "Product"} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name || "Product"}</h2>
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        <div className="card-actions justify-end">
          <AddToCart />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
