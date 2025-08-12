import React from 'react'

const Result = ({ result }) => {
    return (
        <div>
            <h2>Detected Waste Type: {result.wasteType}</h2>
            <h3>Nearby Recycling Centers:</h3>
            <ul className="list-disc pl-5">
                {result.centers.map((center, index) => (
                    <li key={index}>
                        {center.name} - {center.vicinity}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Result
