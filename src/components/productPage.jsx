import React, { useEffect } from 'react' 
import { useState } from 'react';
import { useProduct } from '../context/shopContext'
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets';

function ProductPage() {
    const {products} = useProduct();
    const {id} = useParams();
    const fetchProduct = products.find((item)=>item._id === id);
    const [mainImage, setmainImage] = useState("");
    useEffect(()=>{
      if(fetchProduct){
        setmainImage(assets[fetchProduct.image[0]]);
      }
    }, [fetchProduct])
    
    if(!fetchProduct){
      return console.log("product not found");
    }
    console.log(fetchProduct);
    
  return (
    <>
    <section className='container mx-auto'>
       <section className='flex mx-auto mt-5 md:p-5'>
        <div className="flex flex-1 img-container flex-col-reverse md:flex-row gap-x-5 gap-y-3 sm:gap-y-3">
            <div className="additional-div flex flex-row justify-between md:justify-start md:flex-col overflow-x-auto md:gap-x-0 md:gap-y-3 lg:gap-y-1">
                {
              fetchProduct.image.map((img,index)=>{
                    return(
                      <img onClick={()=> setmainImage(assets[img])} key={index} src={assets[img]} alt='product image' className=' w-32' />
                    )
                  })
                }
            </div>
            <div className="main-image-div flex-1 w-full md:w-[50%] ">
              <img src={mainImage} alt="hiii guysss " className='w-full md:w-[100%] lg:w-[100%] h-auto' />
            </div>
        </div>
       </section>
      </section> 
    </>
  )
}

export default ProductPage
