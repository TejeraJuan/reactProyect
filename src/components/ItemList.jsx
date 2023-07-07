import Item from "./Item";

const ItemList = ({products}) => {
    return (
        <div>
            <h1>Productos</h1>
                {products.length === 0 ? (
                    <div>Loading...</div>
                ) : (
                    products.map((product) => {
                    return(
                        <Item key={product.id} product={product} />
                    )
                 })) 
                 
                }
        </div>
    )
};

export default ItemList;