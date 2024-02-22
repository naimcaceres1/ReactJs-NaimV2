import {useState} from 'react'
import "./ItemCount.css"
import PropTypes from "prop-types"

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
            <h3>{counter}</h3>
            <div>
                <button onClick={decrement}>Decrementar</button>
                <button onClick={addCart}>Agregar al carrito</button>
                <button onClick={increment}>Incrementar</button>
            </div>


        </div>
    )
}

ItemCount.propTypes = {
    initial: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    onAdd: PropTypes.func.isRequired
}

export default ItemCount

