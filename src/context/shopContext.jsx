import { createContext, useContext, useState, useEffect } from "react";
export const ShopContext = createContext();
export const ShopContextProvider = ({children}) => {
    const [products,setProducts] = useState([]);
    const [show, setShow] = useState(false);
    const [search, setSearch] = useState("");
    const [size, setSize] = useState("");
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
    
    return(
        <ShopContext.Provider value={{products, show, setShow, search, setSearch, size, setSize}}>
            {children}
        </ShopContext.Provider>
    )
};

export const useProduct = () => useContext(ShopContext);