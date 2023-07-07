import { useState, useEffect } from 'react';
import loadProducts from './LoadProducts';
import ItemList from './ItemList.jsx';
import { useParams } from 'react-router-dom';


export const ItemListContainer = (props) => {

    const [products, setProducts] = useState([]);

    const { id } = useParams()

    useEffect(() => {
        loadProducts()
        .then((res) => {
            if(id) {
                setProducts(res.filter(product => product.category === id))
            }else{
                setProducts(res);
            }
            
        })
    }, [id])
    
    return (
            <div>
                <ItemList products={products} />
            </div> 
        )
}

export default ItemListContainer;