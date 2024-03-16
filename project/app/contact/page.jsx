import React from "react";

const page = () => {
    return (
        <section className="relative flex flex-wrap lg:h-screen lg:items-center">
            <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">
                        Leave us a Message!
                    </h1>

                    <p className="mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Et libero nulla eaque error neque ipsa culpa autem, at
                        itaque nostrum!
                    </p>
                </div>

                <form
                    action="#"
                    className="mx-auto mb-0 mt-8 max-w-md space-y-4"
                >
                    <div>
                        <label htmlFor="name" className="sr-only">
                            Name
                        </label>

                        <div className="relative">
                            <input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter Name"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="sr-only">
                            Message
                        </label>

                        <div className="relative">
                            <textarea
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter your message"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="inline-block rounded-lg bg-green-500 px-5 py-3 text-sm font-medium text-white"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>

            <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>
        </section>
    );
};

export default page;
