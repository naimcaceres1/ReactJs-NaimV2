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
                    <h2 className='itemText'>{product.name}</h2>
                    <h2 className='itemText'>UYU {product.price}</h2>
                </div>
            </div>
        </Link>
    )
}

export default Item
