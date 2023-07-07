import data from '../data/products.json';

export const loadProducts = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    })
};

export default loadProducts;