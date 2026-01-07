import React, { useEffect, useState } from 'react'
import { useProduct } from '../context/shopContext';
import Title from './title';
import { assets } from '../assets/assets';
import TotalPrice from './totalPrice';

function Cart() {
    const {cart,handleRemove} = useProduct();
    // const [cartitems, setCartitems] = useState(cart);
    useEffect(()=>{
        console.log("Now your Cart Is:",cart);
    },[cart]);
    
    
  return (
    <>
    <Title text1="YOUR " text2="CART" />
    <section className=' py-3'>
        <div className=" container mx-auto div py-2">
            { cart.length === 0 ? <h2 className='text-center text-gray-700 font-semibold text-lg'>Your Cart is Empty</h2> :
            <figure className='w-full text-left'>
                <article className='mb-2 flex flex-col gap-y-2'>
                    {cart.map((item, index) => (
                        <div className='flex border border-[#f7d7d7] py-1 w-full items-center' key={index}>
                            <img className='w-28 ml-3'src={item.image?.[0]?assets[item.image[0]] : undefined} alt={item.name} />
                            <figure className="cart-detail flex w-auto  flex-col text-left ms-8 md:ms-0 md:flex-row md:justify-evenly items-start md:w-full">
                                <div className='text-sm md:px-1 md:py-2 md:text-center'>{item.name}</div>
                                <div className="sizes flex flex-col justify-center">
                                    <p className="text-sm hidden md:block w-full text-center">Size :-</p>
                                    <div className='md:py-2 md:py-2 w-full px-0 md:px-2 text-center md:pb-5'>{item.selectedSize}</div>
                                </div>
                                <div className="quantity flex flex-row md:flex-col justify-center">
                                    <p className="text-sm w-full text-center">Qty:-</p>
                                    <div className='md:py-2 md:py-2 w-full px-0 md:px-2 text-center md:pb-5'>{item.quantity}</div>
                                </div>    
                                <div className="price flex  md:flex-col justify-center">
                                    <p className="text-sm w-full text-center hidden md:block">Price :-</p>
                                    <p className='md:py-2 md:py-2 w-full md:px-2 text-center md:pb-5'>₹ {Number(item.price || 0) * Number(item.quantity || 0) }</p>
                                </div>
                                <i onClick={()=>handleRemove(item._id, item.selectedSize)} className="delete-icon fa-solid fa-trash mt-3 text-gray-700 cursor-pointer"></i>
                            </figure>
                        </div>
                    ))}
                </article>
            </figure>}
        </div>
    </section>
    <TotalPrice />
    </>
  )
}

export default Cart
