import React, { useEffect, useState } from 'react'
import { useProduct } from '../context/shopContext';
import Title from './title';
import { assets } from '../assets/assets';

function Cart() {
    const {cart} = useProduct();
    const [cartitems, setCartitems] = useState(()=> {
        try{
            const storedItems = localStorage.getItem("meri_cart");
            return storedItems ? JSON.parse(storedItems) : [];
        }
        catch(error){
            console.error("Error parsing cart items from localStorage:", error);
            return [];
        }
        }
    );
    useEffect(()=>{
        console.log("Now your Cart Is:",cart);
    },[cart]);
    const [quantityui, setQuantityui] = useState();
    // useEffect(()=>{
        
        // console.log("Cart from context:", cart);
        // console.log("Is array?", Array.isArray(cart));
        // setCartitems(cart);
        // setQuantityui(cart.quantity)
    // },[cart])
    
    // const handleincease=()=>{
        // quantity +=1;
    // }
  return (
    <>
    <Title text1="YOUR " text2="CART" />
    <section className=' py-3 border'>
        <div className=" container mx-auto div border py-2">
            { cartitems.length === 0 ? <h2 className='text-center text-gray-700 font-semibold text-lg'>Your Cart is Empty</h2> :
            <figure className='w-full text-left'>
                {/* <article className='text-gray-600 font-semibold text-lg mb-2'>
                    <div>
                        <div className='border px-4 py-2'>image</div>
                        <div className='border px-4 py-2'>Product</div>
                        <div className='border px-4 py-2'>Quantity</div>
                        <div className='border px-4 py-2'>Price</div>
                    </div>
                </article> */}
                <article className='mb-2 flex flex-col gap-y-2'>
                    {cartitems.map((item, index) => (
                        <div className='flex bg-[#f7d7d7] w-full justify-center items-center' key={index}>
                            <img className=' px-4 py-2 w-28' src={assets[item.image[0]]} alt={item.name} />
                            <figure className="flex flex-col">
                                <div className=' px-4 py-2 w-full text-center'>{item.name}</div>
                                <div className="quantity flex justify-center items-center border border-gray-700 px-2">
                                    <i onClick={()=> setQuantityui(item.quantity +=1) } className='fa-solid fa-plus text-sm'></i>
                                    <div className='px-4 py-2 w-full text-center'>{item.quantity}</div>
                                    <i onClick={()=> setQuantityui(item.quantity -=1) } className='fa-solid fa-minus text-sm'></i>
                                </div>    
                                <div className=' px-4 py-2 w-full text-center'>₹{item.price * item.quantity}</div>
                        </figure>
                        </div>
                    ))}
                </article>
            </figure>}
        </div>
    </section>
    </>
  )
}

export default Cart
