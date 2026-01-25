import { createContext, useContext, useState, useEffect } from "react";
export const ShopContext = createContext();
export const ShopContextProvider = ({children}) => {
    const [products,setProducts] = useState([]);
    const [show, setShow] = useState(false);
    const [search, setSearch] = useState("");
    const [cart, setCart] = useState(()=>{
        const storedcart = localStorage.getItem("cartData");
        return storedcart==[] || storedcart==null ? [] : JSON.parse(storedcart);
    });

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
    
     const AddToCart = async (selectedSize) =>{
         if(!selectedSize){
             alert("Please Select a Size")
         }
         const token = localStorage.getItem("token"); 
        try{
            const res = await fetch('https://meri-dukan-backend-2.onrender.com/add/${fetchProduct._id}',{
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
    // const AddToCart = (fetchProduct, selectedSize) =>{
    //     if(!selectedSize){
    //         alert("Please Select a Size")
    //     }
    //     console.log(fetchProduct, selectedSize);
        
    //     setCart((prev) =>{ 
    //         const existingData = prev.find((item)=> item._id === fetchProduct._id && item.selectedSize === selectedSize);
    //         if(existingData){
    //             console.log(existingData);
                
    //             return prev.map((item)=>{
    //                 if(item._id === fetchProduct._id && item.selectedSize === selectedSize){
    //                     return {...item, quantity: item.quantity + 1};
    //                 }
    //                 else{
    //                     return {...item, quantity: item.quantity};
    //                 }
    //             });
    //         }
    //         else{
    //             return [...prev, {...fetchProduct, quantity: 1, selectedSize: selectedSize}];
    //         }
    //     }
    // );    // console.log(cart);
    // }
    const handleRemove = (removingID, chosenSize) => {
  setCart(prev =>
    prev
      .map(item => {
        if (item._id === removingID && item.selectedSize === chosenSize) {
          // decrease quantity
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          // remove item if quantity is 1
          return null;
        }
        return item;
      })
      .filter(Boolean) // remove nulls
  );
  console.log("removing id is ",removingID," chosen size is ",chosenSize);
};

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