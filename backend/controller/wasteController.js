import axios from "axios";
import fs from "fs";

export const analyzeWaste = async (req, res) => {
    try {
        const imagePath = req.file.path;


        const aiResponse = await axios.post(
            `https://api-inference.huggingface.co/models/microsoft/resnet-50`,
            fs.readFileSync(imagePath),
            {
                headers: {
                    Authorization: `Bearer ${process.env.HF_API_KEY}`,
                    "Content-Type": "application/octet-stream"
                }
            }
        );

        const wasteType = aiResponse.data[0].label;

        fs.unlinkSync(imagePath);

        res.json({
            wasteType
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error analyzing waste" });
    }
};