import React, { useState } from 'react';
import ProductTable from '../../components/productTable/ProductTable';
import { useFetch } from '../../hooks/useFetch';
import Loading from '../../components/loading/Loading';

const Booking = () => {
    const [storeProducts, setStoreProducts] = useState();
    const { loading, products } = useFetch("/products.json")
    const storeDataString = localStorage.getItem("bookings")
    const storeData = JSON.parse(storeDataString)
    console.log(storeData);


    // if (storeData) {
    //     const storeProduct = storeData?.map(data => products?.find(product => product?._id === data))
    //     setStoreProducts(storeProduct)
    // }

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <section>
            <div className="overflow-x-auto py-4">
                <table className=" table w-full">

                    <thead className='text-center text-md md:text-lg font-semibold'>
                        <tr>

                            <th>SL No</th>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Payment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody className='text-center'>

                        {
                            storeData &&
                            storeData?.map(product => {
                                return <ProductTable
                                    key={product?._id}
                                    product={product}
                                    serial={storeData.indexOf(product)}
                                >
                                </ProductTable>
                            })
                        }

                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Booking;