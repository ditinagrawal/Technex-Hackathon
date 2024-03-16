"use client";

import { useEffect, useState } from "react";
import { storage } from "@/firebase/config";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { Button } from "@/components/ui/button";
import axios from "axios";

const page = () => {
    const [imgUrl, setImgUrl] = useState(null);
    const [progresspercent, setProgresspercent] = useState(0);
    const [type, setType] = useState("");

    useEffect(() => {
        setType(window.location.pathname.split("/")[2].toUpperCase());
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const type = e.target[0].value;
        const quantity = e.target[1].value;
        const file = e.target[2]?.files[0];
        if (!file) return;
        const storageRef = ref(storage, `${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgresspercent(progress);
            },
            (error) => {
                alert(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImgUrl(downloadURL);
                    axios
                        .post("https://iitbhu-wastix-backend.vercel.app/dump", {
                            type,
                            quantity,
                            imageUrl: downloadURL,
                        })
                        .then((res) => {
                            console.log(res);
                            window.location.href = "/";
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                });
            }
        );
    };

    return (
        <div className="App">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">
                        Get started today!
                    </h1>

                    <p className="mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Et libero nulla eaque error neque ipsa culpa autem, at
                        itaque nostrum!
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="mx-auto mb-0 mt-8 max-w-md space-y-4"
                >
                    <div>
                        <label htmlFor="type" className="sr-only">
                            Type
                        </label>

                        <div className="relative">
                            <input
                                disabled
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                value={type}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="quantity" className="sr-only">
                            Quantity
                        </label>

                        <div className="relative">
                            <input
                                type="number"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter Quantity here (KG)"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="image" className="sr-only">
                            Image
                        </label>

                        <div className="relative">
                            <input
                                type="file"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            />
                        </div>
                    </div>

                    <button type="submit">
                        <Button>Submit</Button>
                    </button>
                </form>
            </div>
            {/* {!imgUrl && (
                <div className="outerbar">
                    <div
                        className="innerbar"
                        style={{ width: `${progresspercent}%` }}
                    >
                        {progresspercent}%
                    </div>
                </div>
            )} */}
            {/* {imgUrl && <img src={imgUrl} alt="uploaded file" height={200} />} */}
        </div>
    );
};

export default page;
