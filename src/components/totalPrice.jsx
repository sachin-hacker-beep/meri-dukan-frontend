import { useProduct } from "../context/shopContext"
function TotalPrice() {
    const {cart} = useProduct();
    let totalPrice=cart.reduce((total,item)=> total + (Number(item.price || 0) * Number(item.quantity || 0)), 0);
    let Discount=`${totalPrice<500 ? 50 : totalPrice<1000 ? 100 : 150}`;
    let deliveryFee=`${totalPrice<500 ? 40 : totalPrice<1000 ? 20 : 0}`;

  return(
    <section className='w-full container mx-auto px-5 py-2 border'>
        <h2 className='text-center text-2xl font-semibold text-gray-800'>Your Cart</h2>
        <div className=' cart-details flex justify-around'>
            <div className="flex flex-col items-end py-2">
                <p className="text-lg text-gray-700">Total Price</p>
                <p className="text-sm"><span className="text-xs me-2 text-gray-500">Product Price:-</span>{totalPrice}</p>
                <p className="text-sm"><span className="text-xs me-2 text-gray-500">Delivery fee:-</span> +{deliveryFee}</p>
                <p className="text-sm border-b-blue-800  "><span className="text-xs me-2 text-gray-500">Discount:-</span>-{Discount}</p>
                {/* <br /> */}
                <p className="text-sm border-t-2"><span className="text-xs  me-2 text-gray-600">Total Amount:-</span>{totalPrice + Number(deliveryFee) - Number(Discount)}</p>
            </div>
            <div className="flex py-2 flex-col items-center gap-4">
                <p className="text-md text-gray-700">Total Items:- {cart.reduce((total,item)=> total + (Number(item.quantity || 0)), 0)}</p>
                <button className="proceed-btn text-sm w-auto px-4 py-2 bg-[#f7b6b6] hover:bg-[#f3a7a7] text-white rounded">Proceed to Checkout</button>
            </div>
        </div>
    </section>  
)
}

export default TotalPrice
