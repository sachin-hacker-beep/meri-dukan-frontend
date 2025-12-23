import React, { useEffect } from 'react' 
import { useState } from 'react';
import { useProduct } from '../context/shopContext'
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets';
import Related from './related';

function ProductPage() {
    const {products, AddToCart} = useProduct();
    const [selectedSize, setSelectedSize] = useState("");
    const {id} = useParams();
    const fetchProduct = products.find((item)=>item._id === id);
    const [mainImage, setmainImage] = useState("");
    useEffect(()=>{
      if(fetchProduct){
        setmainImage(assets[fetchProduct.image[0]]);
        
      }
      
    }, [fetchProduct])
    if(!fetchProduct){
      return <p className="text-center text-gray-700 font-semibold text-lg">product not found</p>
    }
    const handleAddtoCart = ()=>{git
      if(!selectedSize) {
        alert("Please Select a Size");
        return;
      }
      console.log("Adding to cart:", selectedSize); 
      AddToCart(fetchProduct, selectedSize);
    }
    // console.log(fetchProduct);
    
  return (  
    <>
    <section className='container flex mx-auto w-full '>
       <section className='flex flex-col lg:flex-row mt-2 md:p-5 mx-auto ' >
        <div className="flex flex-1 img-container px-4 flex-col-reverse sm:flex-row gap-x-5 gap-y-3 sm:gap-y-3">
            <div className="additional-div  sm:px-0 flex flex-row gap-x-2 justify-start sm:flex-col overflow-x-auto sm:gap-x-0 sm:gap-y-3 md:gap-y-3 lg:gap-y-3">
                {
              fetchProduct.image.map((img,index)=>{
                    return(
                      <img onClick={()=> setmainImage(assets[img])} key={index} src={assets[img]} alt='product image' className='w-24 sm:w-28  md:w-32 lg:w-24' />
                    ) 
                  })
                }
            </div>
            <div className="main-image-div flex-1 w-full sm:p-0  md:w-[100%] lg:w-[100%] ">
              <img src={mainImage} alt="hiii guysss " className=' w-full md:w-[100%] lg:w-[100%] h-auto' />
            </div>
        </div>
        <div className="product-details flex-1 px-4 md:pl-5 lg:pl-20 mt-5 md:mt-10">
            <h2 className='text-2xl font-semibold text-gray-700'>{fetchProduct.name}</h2>
            <div className="rating-star mt-5 flex">
              <img src={assets.star_icon} alt="Rating" className='w-4 '/>
              <img src={assets.star_icon} alt="Rating" className='w-4 '/>
              <img src={assets.star_icon} alt="Rating" className='w-4 '/>
              <img src={assets.star_icon} alt="Rating" className='w-4 '/>
              <img src={assets.star_dull_icon} alt="Rating" className='w-4 '/>
            </div>
            <p className='text-lg font-medium mt-6 mt-3 text-gray-700'>Price: &#8377; {fetchProduct.price}</p>
            <p className='text-sm md:text-md  font-normal mt-6 text-gray-600'>{fetchProduct.description}</p>
              <p className='text-gray-800 mt-10'>Select Sizes :-</p>
            <figure className='flex flex-col gap-2 gap-x-3 mt-3 gap-y-10 md:gap-y-16'>
              <div className="sizes-div flex gap-2 gap-x-3 items-center">
              {
                fetchProduct.sizes?.map((item, index)=>{
                  return(
                    <button onClick={()=> setSelectedSize(item)} key={index} className={`border bg-gray-200  text-gray-700 py-2 px-4 ${item === selectedSize ? "bg-[#f8b9b9]" : ""} hover:bg-[#f8b9b9] active:bg-[#fac5c5] h-auto rounded`}> {item}</button>
                  )
                })
              }
              <h1>{selectedSize}</h1>
              </div>
              <button onClick={handleAddtoCart} className=' bg-[#f8afaf] text-gray-700 hover:bg-[#f89c9c] text-white w-1/3 sm:w-1/2 py-2 inline text-center rounded '>Add to Cart</button>
            </figure>
        </div>
        
       </section>
      </section> 
      <Related Category={fetchProduct.category} subCategory={fetchProduct.subcategory} />
    </>
  )
}

export default ProductPage
