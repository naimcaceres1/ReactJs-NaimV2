import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import "./ItemListContainer.css"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { categoryId, trademarkId } = useParams();

    useEffect(() => {
        const db = getFirestore();

        let myProductsRef = collection(db, "products");

        if (categoryId) {
            myProductsRef = query(myProductsRef, where("categories", "==", categoryId));
        }

        if (trademarkId) {
            myProductsRef = query(myProductsRef, where("trademark", "==", trademarkId));
        }

        getDocs(myProductsRef)
            .then((response) => {
                const productsFiltered = response.docs.map(doc => ({id: doc.id, ...doc.data()}));
                setProducts(productsFiltered);
            })
            .catch((error) => {
                console.error('Error loading products:', error);
            });
    }, [categoryId, trademarkId]);

    return (
        <div className='itemListContainer'>
            {products.length > 0 ? (
                <ItemList products={products} />
            ) : (
                <h1>Loading products...</h1>
            )}
        </div>
    );
};

export default ItemListContainer;
