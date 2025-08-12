import React, { useState } from "react";
import Result from './pages/Result';
import WasteForm from "./WasteForm";

const App = () => {
    const [result, setResult] = useState(null);
    const [centers, setCenters] = useState([]);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">♻ Waste Analyzer</h1>


            <WasteForm setResult={setResult} setCenters={setCenters} />


            {result && (
                <div className="mt-4 p-4 border rounded">
                    <h2 className="font-bold">Waste Type: {result.wasteType}</h2>
                </div>
            )}


            {centers.length > 0 && (
                <div className="mt-4 p-4 border rounded">
                    <h2 className="font-bold mb-2">Nearby Recycling Centers</h2>
                    <ul className="list-disc ml-5">
                        {centers.map((center, index) => (
                            <li key={index}>
                                {center.display_name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default App;
