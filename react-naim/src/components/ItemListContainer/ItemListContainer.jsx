// ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { categoryId, trademarkId } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/products.json');
                const data = await response.json();
                
                let filteredByCategory = [];
                if (categoryId) {
                    filteredByCategory = data.filter(product => product.categories.toLowerCase() === categoryId.toLowerCase());
                } else {
                    filteredByCategory = data;
                }

                if (trademarkId) {
                    const filteredByTrademark = filteredByCategory.filter(product => product.trademark.toLowerCase() === trademarkId.toLowerCase());
                    setFilteredProducts(filteredByTrademark);
                } else {
                    setFilteredProducts(filteredByCategory);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
                // Aquí puedes manejar el error de alguna manera, como mostrar un mensaje al usuario
            }
        };

        fetchProducts();
    }, [categoryId, trademarkId]);

    return (
        <div>
            {filteredProducts.length > 0 ? (
                <ItemList products={filteredProducts} />
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
};

export default ItemListContainer;
