import mongoose from "mongoose";

const mySchema = new mongoose.Schema(
    {
        type: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        imageUrl: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export const dumpsSchema = mongoose.model("dumps", mySchema);
