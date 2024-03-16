import Link from "next/link";
import React from "react";

const page = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                    <div className="relative z-10 lg:py-16">
                        <div className="relative h-64 sm:h-80 lg:h-full">
                            <img
                                alt=""
                                src="https://t3.ftcdn.net/jpg/05/73/57/76/360_F_573577614_3xNASp9y2eCUSXstGdXf9sKlW3ZYVyUr.jpg"
                                className="absolute inset-0 h-full w-full object-contain"
                            />
                        </div>
                    </div>

                    <div className="relative flex items-center bg-gray-100">
                        <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

                        <div className="p-8 sm:p-16 lg:p-24">
                            <h2 className="text-2xl font-bold sm:text-3xl">
                                About us
                            </h2>

                            <p className="mt-4 text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Aliquid, molestiae! Quidem est
                                esse numquam odio deleniti, beatae, magni
                                dolores provident quaerat totam eos, aperiam
                                architecto eius quis quibusdam fugiat dicta.
                            </p>

                            <Link
                                href="/contact"
                                className="mt-8 inline-block rounded border border-green-600 bg-green-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-500"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default page;
