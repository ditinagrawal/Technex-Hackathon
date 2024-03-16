import React from "react";

const Hero = () => {
    return (
        <section className="relative bg-[url(https://www.ecepl.com/wp-content/uploads/2024/01/sustainable-travel-concept-1-scaled.jpg)] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

            <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"></div>
        </section>
    );
};

export default Hero;
