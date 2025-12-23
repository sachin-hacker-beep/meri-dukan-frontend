import { createContext, useContext, useState, useEffect } from "react";
export const ShopContext = createContext();
export const ShopContextProvider = ({children}) => {
    const [products,setProducts] = useState([]);
    const [show, setShow] = useState(false);
    const [search, setSearch] = useState("");
    const [cart, setCart] = useState([]);

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
    
    const AddToCart = (fetchProduct, selectedSize) =>{
        if(!selectedSize){
            alert("Please Select a Size")
        }
        console.log(fetchProduct, selectedSize);
        
        setCart((prev) =>{ 
            const existingData = prev.find((item)=> item._id === fetchProduct._id && item.selectedSize === selectedSize);
            if(existingData){
                console.log(existingData);
                
                return prev.map((item)=>{
                    if(item._id === fetchProduct._id && item.selectedSize === selectedSize){
                        return {...item, quantity: item.quantity + 1};
                    }
                    else if(item._id == fetchProduct._id && item.selectedSize !== selectedSize){
                        return {...item, quantity: item.quantity};
                    }
                });
            }
            else{
                return [...prev, {...fetchProduct, quantity: 1, selectedSize: selectedSize}];
            }
        }
        );
        // console.log(cart);
    }
    useEffect(()=>{
        console.log("Cart updated:", cart);
        // console.log(cart.length);
        
    },[cart])
    return(
        <ShopContext.Provider value={{products, show, setShow, search, setSearch, cart, setCart, AddToCart}}>
            {children}
        </ShopContext.Provider>
    )
};

export const useProduct = () => useContext(ShopContext);