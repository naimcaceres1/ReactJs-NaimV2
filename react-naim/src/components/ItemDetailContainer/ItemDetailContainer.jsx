import {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import "./ItemDetailContainer.css"
import {getFirestore, doc, getDoc} from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [products, setProducts] = useState([])

    const {id} = useParams()


    useEffect(() => {
        const db = getFirestore()

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
