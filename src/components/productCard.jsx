import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({product, assets}) {
    const shortText = product.description.length > 40 ? product.description.substring(0, 40) + "...more" : product.description; 
    
  return (
    <>
    <Link to={`/product/${product._id}`} className='product-card  cursor-pointer rounded border flex flex-col h-full ' key={product._id}>
        {/* <div className="card flex flex-col justify-center h-full items-center p-3 ">     */}
            <div className='overflow-hidden'>
                <img src={assets[product.image[0]]} alt={product.name} className=" hover:scale-105 transition ease-in-out product-image rounded w-full h-auto " />
            </div>
            <div className=' mt-2 pb-1 ps-1 flex flex-col gap-1 '>
                <h1 className="text-sm font-semibold text-left text-gray-900">{product.name}</h1> 
                <p className="label text-sm font-semibold text-left text-gray-900">Rs.{product.price}</p>
                <p className="label bottom-0 text-xs text-gray-600">{shortText}</p>
            </div>
            {/* <div className='mt-auto pt-2 w-full'> */}
                {/* <button className="  btn btn-primary bg-slate-400 rounded px-3 text-xs py-1 mt-auto text-white hover:bg-slate-500">Add to Cart</button> */}
            {/* </div>     */}
        {/* </div> */}
    </Link>
    </>
  )
}

export default ProductCard
