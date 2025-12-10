import React, { useEffect, useState } from 'react'
import Title from './title';
import ProductCard from './productCard';
import { assets } from '../assets/assets';
import { useProduct } from '../context/shopContext';

function Related({Category, subCategory}) {
    const {products} = useProduct();
    const [related, setRelated] = useState([]);
    useEffect(()=>{
        let DataCopy = products.slice();
        const fetchRelated = async () =>{
            if(Category.length > 0){
                DataCopy = DataCopy.filter((item)=> Category.includes(item.category));
            }
            if(subCategory.length > 0){
                DataCopy = DataCopy.filter((item)=> subCategory.includes(item.subcategory));
            }
            setRelated(DataCopy.slice(0, 4));
        }
        fetchRelated();
    },[products]);
  return (
    <>
    <section className='container related-products border my-10 mx-auto '>
        <div className="text-center text-3xl py-2 mx-auto">
            <Title text1="RELATED" text2="PRODUCTS" />
        </div>
        <section className="container section p-3 product-section w-full mx-auto ">
            <main className="products-div flex grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 gap-4  ">
                {
                    related.length > 0 ? related.map((item)=>{
                        return(
                            <ProductCard key={item._id} product={item} assets={assets} />
                        )
                    }) : <h1>No Related Products Available</h1>
                }
            </main>
        </section>    
    </section>
    </>
  )
}

export default Related
