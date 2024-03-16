"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const page = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/purchase").then((res) => {
            setProducts(res.data);
        });
    }, []);
    return (
        <div className="flex items-center justify-evenly pt-12">
            {products.map((product) => {
                return (
                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img
                            className="p-8 rounded-t-lg"
                            src={product.imageUrl}
                            alt="product image"
                        />
                        <div className="px-5 pb-5">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                {product.title}
                            </h5>
                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                    ${product.price}
                                </span>
                                <a
                                    href="#"
                                    className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                >
                                    Add to cart
                                </a>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default page;
