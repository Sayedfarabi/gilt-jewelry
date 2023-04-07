import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import Loading from '../../components/loading/Loading';
import ProductCard from '../../components/productCard/ProductCard';

const Products = () => {
    const { loading, products } = useFetch("products.json")
    console.log(products);

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <section>
            <div className='py-8 md:py-12'>
                <h1 className='text-center text-primary text-2xl md:text-4xl'> PRODUCTS</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 py-8'>
                {
                    products &&
                    products.map(product => {
                        return <ProductCard
                            key={product?._id}
                            product={product}
                        >
                        </ProductCard>
                    })
                }
            </div>
        </section>
    );
};

export default Products;