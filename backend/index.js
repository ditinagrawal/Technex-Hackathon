import "dotenv/config";
import express from "express";
import connectDB from "./db/db.js";
import cors from "cors";
import router from "./routes/routes.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(router);

connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(
                `Server is running : http://localhost:${process.env.PORT}`
            );
        });
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!! ", err);
    });
