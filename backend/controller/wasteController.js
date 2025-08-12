import axios from "axios";

export const analyzeWaste = async (req, res) => {
    try {
        const { imageUrl, location } = req.body;

        const aiResponse = await axios.post(
            `https://api-inference.huggingface.co/models/your-waste-model`,
            { inputs: imageUrl },
            { headers: { Authorization: `Bearer ${process.env.HF_API_KEY}` } }
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

        res.json({
            wasteType,
            centers: mapResponse.data.results,
        });
    } catch (error) {
        res.status(500).json({ error: "Error analyzing waste" });
    }
};