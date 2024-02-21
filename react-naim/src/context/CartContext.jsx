import React, {createContext, useState} from "react";

export const CartContext = createContext()


const CartProvider = ({children}) =>{

    const[cart,setCart] = useState([])
    
    const addCart = (products, amount) => {
        const addedProduct = cart.find(product => product.products.id == products.id)

        if(!addedProduct){
            setCart([...cart,{products, amount}])
        }else{
            const newProduct = [...cart]
            newProduct[addedProduct].amount += amount;
            setCart(newProduct)
        }
    }

    const deleteItem = (productsId) => {
        const newProduct = cart.filter(item => item.products.id !== productsId)
        setCart(newProduct)
    }

    
    const emptyCart = () => {
        setCart([])
    }


    const amountCart = () => {
        const totalQuantity = cart.reduce((total,item)=> total+item.amount,0)
        return totalQuantity
    }

    const totalCart = () => {
        const totalPrice = cart.reduce((total,item) => total + (item.products.price * item.amount),0)
        return totalPrice

    }


    return(
        <CartContext.Provider value={{
            cart,
            addCart,
            deleteItem,
            emptyCart,
            amountCart,
            totalCart,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider