# ♻ AI Waste Sorting & Recycling Advisor (MERN + AI)

An AI-powered waste detection app built with the **MERN stack** that helps users identify waste type from an image and suggests nearby recycling centers.

---

## 🚀 Features
- 📷 Upload an image of waste
- 🤖 AI detects the waste type (Plastic, Paper, E-waste, etc.)
- 📍 Get nearby recycling/disposal centers using Google Maps
- 💾 Store waste data in MongoDB
- 🌐 Responsive UI with Tailwind CSS

---

## 🛠 Tech Stack
**Frontend:** React (Vite), Tailwind CSS, Axios  
**Backend:** Node.js, Express.js, Axios  
**Database:** MongoDB (Mongoose)  
**AI API:** Hugging Face / Google Gemini Vision  
**Maps API:** Google Maps Places API  

---

## 📂 Folder Structure
ai-waste-sorting/
├── backend/
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ │ └── wasteController.js
│ ├── routes/
│ │ └── wasteRoutes.js
│ ├── server.js
│ ├── .env
│ └── package.json
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ └── WasteForm.jsx
│ │ ├── pages/
│ │ │ └── Result.jsx
│ │ └── App.jsx
│ ├── index.html
│ └── package.json
└── README.md


---

## ⚙️ Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/ai-waste-sorting.git
cd ai-waste-sorting

cd backend
npm install

Create a .env file inside the backend folder:

PORT=5000
MONGO_URI=your_mongodb_uri
HF_API_KEY=your_huggingface_api_key
GOOGLE_MAPS_KEY=your_google_maps_api_key

Run backend:
npm run dev

3️⃣ Frontend Setup
cd ../frontend
npm install

Run frontend:
npm run dev


🧠 How It Works
User uploads an image URL of waste.

Browser fetches current location using Geolocation API.

Backend sends the image to AI model for waste classification.

Backend uses Google Maps API to find nearest recycling centers.

Frontend displays waste type & center list.


🔑 API Keys Required
MongoDB Atlas URI → MongoDB Atlas

Hugging Face API Key → Hugging Face

Google Maps API Key → Google Cloud Console

