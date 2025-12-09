import React, { useEffect, useState } from 'react'
import { useProduct } from '../context/shopContext';
import Title from './title';
import ProductCard from './productCard';
import { assets } from '../assets/assets';

function Bestseller() {
    const [bestsell,setBestsell] = useState([]);
    const {products} = useProduct();
    // console.log("the best clothes are -: ", products);
    
    useEffect(()=>{
        const bestSeller =() =>{
            try{
                if(products.length > 0){
                    const bestsellItem =  products.filter((item)=>(item.bestseller===true));
                    setBestsell(bestsellItem);
                    console.log("only best sell item is",bestsell);
                    
                }
                // console.log("all products are",products);
                
            }
            catch(error){
                console.log("Error fetching bestsellers", error);
            }
        }
        bestSeller();
    }, [products])
  return (
    <>
    <Title text1="OUR"  text2="BESTSELLER" />
    <section className="container section product-section p-3 w-full mx-auto ">
        <main className="products-div flex grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4  ">
            {bestsell ? bestsell.map((product)=>(
                <ProductCard key={product._id} product={product} assets={assets} />
            )) : <h1>NO Products Available</h1> }
        </main>
    </section>    
    </>
  )
}

export default Bestseller
