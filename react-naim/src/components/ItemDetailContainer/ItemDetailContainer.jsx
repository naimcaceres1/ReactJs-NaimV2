import {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [products, setProducts] = useState([])

    const {id} = useParams()

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = await fetch('/products.json')
                const data = await response.json()
                const product = data.find((p)=>p.id==id)
                setProducts(product)
            }catch(error){
                alert("Error al cargar los productos, estamos trabajando para solucionarlo "+error);
            }
        }
        fetchData()
    },[id])


    return (
        <div>
            <ItemDetail products={products}/>
        </div>
    )
}

export default ItemDetailContainer
