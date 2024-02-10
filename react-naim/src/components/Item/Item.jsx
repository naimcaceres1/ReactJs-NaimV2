import { Link } from 'react-router-dom'
import "./Item.css"

const Item = ({product}) => {
    return (
        <Link to={`/detail/${product.id}`}>
            <div key={product.id} className='itemContainer'>
                <div className='imgItem'>
                    <img src={product.img} alt={product.name} />
                </div>
                <div className='itemDescription'>
                    <h2 className='textoItem'>{product.name}</h2>
                    <h2 className='textoItem'>{product.price}</h2>
                    <h2 className='textoItem'>{product.description}</h2>
                </div>
            </div>
        </Link>
    )
}

export default Item
