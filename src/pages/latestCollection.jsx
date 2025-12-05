import {React , useEffect, useState} from 'react';
import {assets} from '../assets/assets.js'
import { useProduct } from '../context/shopContext.jsx';
import ProductCard from '../components/productCard.jsx';
import Title from '../components/title.jsx';
function LatestCollection() {
    const {products} = useProduct();
    const [latestCollections, setLatestCollections] = useState([]);
    useEffect(()=>{
        if(products.length===0){
            return;
        }
        const DataCopy = products.slice(0,10);
        setLatestCollections(DataCopy);
        // console.log(DataCopy);
        
    },[products]);
    // console.log(latestCollection);
  return (
    <>
    <Title text1="LATEST" text2="COLLECTION" />
    <section className="container section product-section w-full mx-auto ">
        <main className="products-div flex grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4  ">
            
            {/* <h1>Products</h1> */}
            { latestCollections.length > 0 ? latestCollections.map((product)=>{
                return(
                    <ProductCard key={product._id} product={product}  assets={assets} />
                )
            } ) : <h1>No Products Available</h1>}
        </main>
    </section>
    </>
  )
}

export default LatestCollection;
