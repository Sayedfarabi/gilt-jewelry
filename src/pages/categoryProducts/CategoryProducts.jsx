import React from 'react';
import Loading from '../../components/loading/Loading';
import { useFetch } from '../../hooks/useFetch';
import ProductCard from '../../components/productCard/ProductCard';
import { useLocation } from 'react-router-dom';

const CategoryProducts = () => {
    const location = useLocation()
    const { loading, products } = useFetch("../products.json")

    // Get Category Id 
    const pathname = location?.pathname;
    const splitPathname = pathname.split("/");
    const categoryId = splitPathname[2];


    // Get Products for Specific CategoryId 
    const categoryProducts = products?.filter(product => product?.categoryId === categoryId);
    console.log(categoryProducts);




    if (loading || !categoryProducts) {
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
                    categoryProducts?.map(product => {
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

export default CategoryProducts;