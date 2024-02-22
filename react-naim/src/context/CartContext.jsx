import {createContext, useState} from "react";
import PropTypes from "prop-types"
export const CartContext = createContext()


const CartProvider = ({children}) =>{

    const[cart,setCart] = useState([])
    
    const addCart = (products, amount) => {
        const addedProduct = cart.find(product => product.products.id == products.id)
        if(!addedProduct){
            cart.push({products,amount})
            console.log(cart)
        }else{
            addedProduct.amount += amount
        }
    }

    const deleteItem = (id) => {
        const newProduct = cart.filter(item => item.products.id !== id)
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

CartProvider.propTypes = {
    children: PropTypes.any.isRequired
} 

export default CartProvider