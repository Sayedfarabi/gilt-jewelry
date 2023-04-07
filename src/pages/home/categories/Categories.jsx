import React from 'react';
import CategoryCard from '../../../components/categoryCard/CategoryCard';

const Categories = () => {
    const categories = [
        {
            _id: "cat001",
            image: "https://cdn.shopify.com/s/files/1/0604/4932/5315/files/cat3.png?v=1635327302",
            title: "Rings",
        },
        {
            _id: "cat002",
            image: "https://cdn.shopify.com/s/files/1/0604/4932/5315/files/cat2.png?v=1635327302",
            title: "Errings",
        },
        {
            _id: "cat003",
            image: "https://cdn.shopify.com/s/files/1/0604/4932/5315/files/cat1.png?v=1635327301",
            title: "Bracelets",
        },
        {
            _id: "cat004",
            image: "https://cdn.shopify.com/s/files/1/0604/4932/5315/files/cat4.png?v=1635327302",
            title: "Necklaces",
        },
        {
            _id: "cat005",
            image: "https://static8.depositphotos.com/1341614/1006/i/600/depositphotos_10062289-stock-photo-wooden-necklace.jpg",
            title: "Tribal",
        },
        {
            _id: "cat006",
            image: "https://www.hazoorilallegacy.com/wp-content/uploads/2019/06/8.png",
            title: "Polki",
        },
    ]

    return (
        <section className='py-8 md:py-12'>
            <div>
                <div>
                    <h1 className='text-3xl md:text-5xl text-primary text-center py-10'>CATEGORIES</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3'>
                    {
                        categories?.map(category => {
                            return <CategoryCard
                                key={category?._id}
                                category={category}
                            >
                            </CategoryCard>
                        })
                    }
                </div>
            </div>

        </section>
    );
};

export default Categories;