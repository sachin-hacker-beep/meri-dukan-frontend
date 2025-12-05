import React, { useEffect, useState } from 'react'
import Title from '../components/title'
import { useProduct } from '../context/shopContext';
import ProductCard from '../components/productCard';
import { assets } from '../assets/assets';
import Searchbar from '../components/searchbar';

function AllCollections() {
    const {products, show, setShow, search, setSearch} = useProduct();
    const [filterProduct, setFilterProduct] = useState([]);
    const [Category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState('Relevant');
    
    const handleCategory = (e)=>{
      if(Category.includes(e.target.value))
        setCategory(prev => prev.filter(item =>item !== e.target.value));
      else{
        setCategory(prev => [...prev,e.target.value])
      }
    }
    const handleSubCategory = (e)=>{
      
      if(subCategory.includes(e.target.value))
        setSubCategory(prev => prev.filter(item =>item !== e.target.value));
      else{
        setSubCategory(prev => [...prev,e.target.value])
      }
    }
    
    const applyFilter = ()=>{
      let DataCopy = products.slice();
      if(show && search){
        DataCopy = DataCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()));
      }
      if(Category.length > 0){
        DataCopy = DataCopy.filter(item => Category.includes(item.category));
      }
      if(subCategory.length > 0){
        DataCopy = DataCopy.filter(item => subCategory.includes(item.subcategory));
      }
      setFilterProduct(DataCopy);
    }
    const sortFilter = () =>{
      let DataCopy = filterProduct.slice();
      if(sortType === 'Low-High'){
        setFilterProduct(DataCopy.sort((a,b)=> a.price - b.price));
      }
      else if(sortType === 'High-Low'){
        setFilterProduct(DataCopy.sort((a,b)=> b.price - a.price));
      }
      else{
        setFilterProduct(products);
      }
      
    }
    useEffect(()=>{
      sortFilter();
    },[sortType])
    useEffect(()=>{
      applyFilter();
    },[Category,products,subCategory,search])  
  return (
    <>
       {show ? <Searchbar /> : null}
      <Title text1="OUR" text2="COLLECTION" />
      <section className='overflow-hidden container flex-col md:flex-row flex justify-between  mx-auto '>
        <div className='filter-section mb-5 md:mb-0 px-2 flex justify-evenly md:justify-start  md:flex-col  gap-y-3 '>
          <div className=" filter-left-category border p-3">
            <h1 className='text-sm mb-2 font-semibold text-gray-700'>Category</h1>
            <div className='flex gap-3'>
              <input type="checkbox" value={'Men'} onChange={handleCategory} className='w-3' id='Male'/>
              <label htmlFor="Male" className='text-sm text-gray-600'>Male</label>
            </div>
            <div className='flex gap-3'>
              <input type="checkbox" value={'Women'} onChange={handleCategory} className='w-3' id='Female'/>
              <label htmlFor="Female"  className='text-sm text-gray-600'>Female</label>
            </div>
            <div className='flex gap-3'>
              <input type="checkbox" value={'Kids'} onChange={handleCategory} className='w-3' id='Kid'/>
              <label htmlFor="Kid" className='text-sm text-gray-600'>Kid</label>
            </div>
          </div>
          <div className=" filter-left-Subcategory border p-3">
            <h1 className='text-sm mb-2 font-semibold text-gray-700'>Type</h1>
            <div className='flex gap-3'>
              <input type="checkbox" value={'Topwear'} onChange={handleSubCategory} className='w-3' id='Topwear'/>
              <label htmlFor="Topwear" className='text-sm text-gray-600'>Topwear</label>
            </div>
            <div className='flex gap-3'>
              <input type="checkbox" value={'Bottomwear'} onChange={handleSubCategory} className='w-3' id='Bottomwear'/>
              <label htmlFor="Bottomwear"  className='text-sm text-gray-600'>Bottomwear</label>
            </div>
            <div className='flex gap-3'>
              <input type="checkbox" value={'Winterwear'} onChange={handleSubCategory} className='w-3' id='Winterwear'/>
              <label htmlFor="Winterwear" className='text-sm text-gray-600'>Winterwear</label>
            </div>
          </div>
          <div className="filter-right flex flex-col border p-3">
            <h1 className='text-sm mb-2 font-semibold text-gray-700'> Sort By Price</h1>
            <div className="flex">
              <select onChange={(e)=>setSortType(e.target.value)} name="select-price" className="outline-none bg-white text-sm text-gray-600" id="select-price">
                <option value="Relevant">Sort By Relevant</option>
                <option value="Low-High">Low to High</option>
                <option value="High-Low">High to Low</option>
              </select>
            </div>
          </div>
        </div>
        <div className="filter-products px-3">
          <section  className="container product-section w-full mx-auto ">
            <main className="products-div flex grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4  ">
              {
                filterProduct.length > 0 ? filterProduct.map((product)=>{
                  return(
                  <ProductCard key={product._id} assets={assets} product={product} />
              )}) : <h1 className='text-2xl'> no products</h1>
              }              
            </main>
          </section>  
        </div>
      </section>
    </>
)
}

export default AllCollections;