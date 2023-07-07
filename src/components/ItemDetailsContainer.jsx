import { useState, useEffect } from 'react';
import loadProducts from './LoadProducts';
import ItemDetail from './ItemDetail.jsx';
import { Container } from 'react-bootstrap';
import Item from './Item';


export const ItemDetailsContainer = (props) => {

    const [product, setProduct] = useState([]);



    useEffect(() => {
        loadProducts()
        .then((res) => {
                setProduct(res[2]);
        })
    }, [])
    
    return (
            <Container className='mt-4'>
                <h1>Detalles</h1>
                {product.length === 0 ? (
                    <div>Loading...</div>
                ) : (
                    product.map((product) => {
                    return(
                        <ItemDetail key={product.id} product={product} />
                    )
                 })) 
                 
                }
                <Item product={product} />
            </Container> 
        )
}

export default ItemDetailsContainer;
