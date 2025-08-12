import React, { useState } from 'react'
import WasteForm from './components/WasteForm';
import Result from './pages/Result';

const App = () => {
    const [result, setResult] = useState(null);

    return (
        <div className='p-5 max-w-xl mx-auto'>
            <h1 className='text-2xl font-bold text-center mb-4'>
                ♻ AI Waste Sorting & Recycling Advisor
            </h1>

            {!result ? <WasteForm setResult={setResult} /> : <Result result={result} />}
        </div>
    )
}

export default App
