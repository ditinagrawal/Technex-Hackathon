import { Schema } from "../models/model.js";
import { dumpsSchema } from "../models/dumpsModel.js";

const get = async (req, res) => {
    res.send("Hello from Wastix Backend");
};

const sell = async (req, res) => {
    const { title, price, imageUrl } = req.body;
    console.log(title, price, imageUrl);

    Schema.create({ title, price, imageUrl })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err.message);
        });
};

const purchase = async (req, res) => {
    Schema.find()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err.message);
        });
};

const dump = async (req, res) => {
    const { type, quantity, imageUrl } = req.body;
    console.log(type, quantity, imageUrl);

    dumpsSchema
        .create({ type, quantity, imageUrl })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err.message);
        });
};

export { get, sell, purchase, dump };
