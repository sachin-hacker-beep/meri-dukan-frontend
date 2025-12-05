import { createContext, useContext, useState, useEffect } from "react";
export const ShopContext = createContext();
export const ShopContextProvider = ({children}) => {
    const [products,setProducts] = useState([]);
    const [show, setShow] = useState(false);
    const [search, setSearch] = useState("");
    useEffect(()=>{
        const fetchProduct = async ()=>{
            try{
                const res = await fetch("http://localhost:5000/products");
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
        <ShopContext.Provider value={{products, show, setShow, search, setSearch}}>
            {children}
        </ShopContext.Provider>
    )
};

export const useProduct = () => useContext(ShopContext);