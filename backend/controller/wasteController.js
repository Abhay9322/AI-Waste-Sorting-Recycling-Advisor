import axios from "axios";
import fs from "fs";

export const analyzeWaste = async (req, res) => {
    try {
        const location = JSON.parse(req.body.location);
        const imagePath = req.file.path;


        const aiResponse = await axios.post(
            `https://api-inference.huggingface.co/models/your-waste-model`,
            fs.readFileSync(imagePath),
            {
                headers: {
                    Authorization: `Bearer ${process.env.HF_API_KEY}`,
                    "Content-Type": "application/octet-stream"
                }
            }
        );

        const wasteType = aiResponse.data[0].label;

        const mapResponse = await axios.get(
            `https://maps.googleapis.com/maps/api/place/nearbysearch/json`,
            {
                params: {
                    location: `${location.lat},${location.lng}`,
                    radius: 5000,
                    keyword: `${wasteType} recycling center`,
                    key: process.env.GOOGLE_MAPS_KEY,
                },
            }
        );

        fs.unlinkSync(imagePath);

        res.json({
            wasteType,
            centers: mapResponse.data.results,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error analyzing waste" });
    }
};