import {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import "./ItemDetailContainer.css"
import {doc, getDoc} from 'firebase/firestore'
import { db } from '../../firebase/config'

const ItemDetailContainer = () => {

    const [products, setProducts] = useState([])

    const {id} = useParams()


    useEffect(() => {

        const newDoc = doc(db, "products", id)

        getDoc(newDoc)
        .then(response => {
            const data = response.data()
            const detailProduct = {id: response.id, ...data}
            setProducts(detailProduct)
        })
        .catch(error => {
            console.error('Error loading detail products:', error);
        })
    
    },[])


return (
        <div className='itemDetail'>
            <ItemDetail products={products}/>
        </div>
    )
}

export default ItemDetailContainer
