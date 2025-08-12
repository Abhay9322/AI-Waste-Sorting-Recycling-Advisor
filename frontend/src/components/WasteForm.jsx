import React, { useState } from 'react';
import axios from 'axios';

const WasteForm = ({ setResult }) => {
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        navigator.geolocation.getCurrentPosition(async (pos) => {
            const loc = {
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            };

            const formData = new FormData();
            formData.append("image", file);
            formData.append("location", JSON.stringify(loc));

            const res = await axios.post(
                "http://localhost:5000/api/waste/analyze",
                formData,
                { headers: { "Content-Type": "multipart/form-data" } }
            );
            setResult(res.data);
        });
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <input
                type="file"
                accept='image/*'
                onChange={(e) => setFile(e.target.files[0])}
                className='border p-2'
                required
            />
            <button className='bg-green-600 text-white p-2 rounded'>Analyze Waste</button>
        </form>
    )
}

export default WasteForm
