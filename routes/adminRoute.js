import express from "express";
import { adminLogin,adminRegister,getData } from "../controllers/adminController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", adminLogin);
// router.post("/",adminRegister)

router.get("/data",getData)

export default router;
