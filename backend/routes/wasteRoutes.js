import express from "express";
import { analyzeWaste } from "../controller/wasteController.js";

const router = express.Router();

router.post("/analyze", analyzeWaste);

export default router;