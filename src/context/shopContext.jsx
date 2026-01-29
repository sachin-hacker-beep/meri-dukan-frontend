import { createContext, useContext, useState, useEffect } from "react";
export const ShopContext = createContext();
export const ShopContextProvider = ({children}) => {
    const [products,setProducts] = useState([]);
    const [show, setShow] = useState(false);
    const [search, setSearch] = useState("");
    const [cart, setCart] = useState([]);
    useEffect(()=>{
    const fetchCart = async ()=>{
            const token = localStorage.getItem("token");
            const res= await fetch("https://meri-dukan-backend-2.onrender.com/cart",{
                method : "GET",
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`Bearer ${token}`
                }
            });
            const data = await res.json();
            if(res.status === 400 || res.status === 401 || res.status === 404){
                alert(data.message);
                return;
            }
            setCart(Array.isArray(data) ? data : []);

        };
        fetchCart();
    },[]);
    useEffect(()=>{
        const fetchProduct = async ()=>{
           try{
                const res = await fetch("https://meri-dukan-backend-2.onrender.com/products");
                const data = await res.json();
                setProducts(data); 
            } 
            catch(error){
                console.error("Failed to fetch products:", error);
            }
        };
        fetchProduct();
    }, []);
    
     const AddToCart = async (selectedSize,fetchProduct) =>{
        if (!fetchProduct || !fetchProduct._id) {
            alert("Product not ready yet");
            return;
        }
        if(!selectedSize){
            alert("Please Select a Size");
            return;
        }
        const token = localStorage.getItem("token");
        if(!token){
            alert("You need to be logged in to add items to the cart.");
            return;
        }
        try{
            const res = await fetch(`https://meri-dukan-backend-2.onrender.com/add/${fetchProduct._id}`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({selectedSize}),
            });
            const data= await res.json();
            if(res.status === 200 || res.status === 201){
                alert(data.message);
            }
            if(res.status === 400){
                alert(data.message);
            }
            console.log("Add to cart response:", data);
        }
        catch(error){
            console.error("Error adding to cart:", error);
            }
        }

        const handleRemove= async (productID, selectedSize)=>{
            const token = localStorage.getItem("token");
            if(!token){
                alert("You need to be logged in to remove items from the cart.");
                return;
            }
            const res = await fetch(`https://meri-dukan-backend-2.onrender.com/cart/remove/${productID}/${selectedSize}`, {
                method:"DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await res.json();
            if(res.status === 200 || res.status === 201){
                alert(data.message);
            }
            if(res.status === 404){
                alert(data.message);
            }
            console.log("Remove from cart response:", data);
        }

    useEffect(()=>{
        console.log("Cart updated:", cart);
        // console.log(cart.length);
        localStorage.setItem("cartData", JSON.stringify(cart));
    },[cart])
    return(
        <ShopContext.Provider value={{products,handleRemove, show, setShow, search, setSearch, cart, setCart, AddToCart}}>
            {children}
        </ShopContext.Provider>
    )
};

export const useProduct = () => useContext(ShopContext);