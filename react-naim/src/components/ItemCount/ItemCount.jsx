import {useState} from 'react'
import "./ItemCount.css"

const ItemCount = ({initial, stock, onAdd}) => {

    const [counter,setCounter] = useState(1)
    
    const increment = () =>{
        if(counter < stock){
            setCounter (counter+1)
        }
    }

    const decrement = () =>{
        if(counter > initial){
            setCounter (counter-1)
        }
    }

    const addCart = () =>{
        onAdd(counter)
    }




    return (
        <div className='itemCount'>
            <h3>Cantidad: {counter}</h3>
            <div className='itemCountButtons'>
                <button className='decrementButton' onClick={decrement}>-</button>
                <button className='addCart' onClick={addCart}>Agregar al carrito</button>
                <button className='incrementButton' onClick={increment}>+</button>
            </div>
        </div>
    )
}


export default ItemCount

