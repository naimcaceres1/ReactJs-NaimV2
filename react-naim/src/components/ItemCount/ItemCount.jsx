import React, {useState} from 'react'
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

    const agregarCarrito = () =>{
        onAdd(counter)
    }




    return (
        <div className='itemCount'>
            <h3>{counter}</h3>
            <div>
                <button onClick={decrement}>Decrementar</button>
                <button onClick={agregarCarrito}>Agregar al carrito</button>
                <button onClick={increment}>Incrementar</button>
            </div>


        </div>
    )
}

export default ItemCount

