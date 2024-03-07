import {createContext, useState} from "react";
import PropTypes from "prop-types"
export const CartContext = createContext()


const CartProvider = ({children}) =>{

    const[cart,setCart] = useState([])
    
    const addCart = (products, amount) => {
        const addedProduct = cart.findIndex(product => product.products.id === products.id);
        if (addedProduct < 0) {
            setCart([...cart, {products, amount}]);
        }else{
            const updatedCart = [...cart];
            updatedCart[addedProduct].amount += amount;
            setCart(updatedCart);
        }
    }

    const deleteProduct = (id) => {
        const newProduct = cart.filter(product => product.products.id !== id)
        setCart(newProduct)
    }

    
    const emptyCart = () => {
        setCart([])
    }


    const amountCart = () => {
        const totalQuantity = cart.reduce((total,product)=> total+product.amount,0)
        return totalQuantity
    }

    const totalCart = () => {
        let totalPrice = 0;
        cart.forEach((product) => {
            totalPrice += product.products.price * product.amount;
        });
        return totalPrice;
    };
    


    return(
        <CartContext.Provider value={{
            cart,
            addCart,
            deleteProduct,
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