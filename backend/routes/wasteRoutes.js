import express from "express";
import multer from "multer";
import { analyzeWaste } from "../controller/wasteController.js";

const router = express.Router();

const upload = multer({ dest: "uploads/" })

router.post("/analyze", upload.single("image"), analyzeWaste);

export default router;