import React, { useState } from 'react';
import axios from 'axios';

const WasteForm = ({ setResult }) => {
    const [imageUrl, setImageUrl] = useState("");
    const [location, setLocation] = useState({ lat: "", lng: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();

        navigator.geolocation.getCurrentPosition(async (pos) => {
            const loc = {
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            };

            setLocation(loc);

            const res = await axios.post("http://localhost:5000/api/waste/analyze", {
                imageUrl,
                location: loc
            });
            setResult(res.data);
        });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
                type="text"
                placeholder='Enter Image URL of Waste'
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="border p-2"
            />
            <button className='bg-green-600 text-white p-2 rounded'>Analyze Waste</button>
        </form>
    )
}

export default WasteForm
