import { Router } from "express";
import { dump, get, purchase, sell } from "../controllers/controllers.js";

const router = Router();

router.get("/", get);

router.post("/sell", sell);

router.get("/purchase", purchase);

router.post("/dump", dump);

export default router;
