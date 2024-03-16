import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
    return (
        <header className="bg-white sticky top-0">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <Link className="block text-green-600" href="/">
                            <span className="sr-only">Home</span>
                            <Image
                                src="/logo.png"
                                alt=""
                                width={150}
                                height={150}
                            />
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <Link
                                        className="text-gray-500 transition hover:text-gray-500/75"
                                        href="/about"
                                    >
                                        {" "}
                                        About{" "}
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="text-gray-500 transition hover:text-gray-500/75"
                                        href="/sell"
                                    >
                                        {" "}
                                        Sell{" "}
                                    </Link>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-500 transition hover:text-gray-500/75"
                                        href="/purchase"
                                    >
                                        {" "}
                                        Purchase{" "}
                                    </a>
                                </li>

                                <li>
                                    <Link
                                        className="text-gray-500 transition hover:text-gray-500/75"
                                        href="/dumpsters"
                                    >
                                        {" "}
                                        Dumpsters{" "}
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="text-gray-500 transition hover:text-gray-500/75"
                                        href="/contact"
                                    >
                                        {" "}
                                        Contact{" "}
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <SignedOut>
                                <Link
                                    className="rounded-md bg-green-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                                    href="/sign-up"
                                >
                                    Sign up
                                </Link>

                                <div className="hidden sm:flex">
                                    <Link
                                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-green-600"
                                        href="/sign-in"
                                    >
                                        Sign in
                                    </Link>
                                </div>
                            </SignedOut>

                            <SignedIn>
                                <Link
                                    className="rounded-md px-5 mt-1 text-sm font-medium"
                                    href="/cart"
                                >
                                    <ShoppingCart />
                                </Link>

                                <div className="hidden sm:flex scale-125">
                                    <UserButton afterSignOutUrl="/" />
                                </div>
                            </SignedIn>
                        </div>

                        <div className="block md:hidden">
                            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
