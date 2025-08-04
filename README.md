# 🌾 Agrisena — Your Digital Farming Companion

**Agrisena** is a full-stack web application designed to empower farmers with real-time weather updates, crop recommendations, market prices, and disaster alerts — all in one platform. It leverages modern web technologies and open APIs to provide data-driven support for agricultural decision-making.

---

## 🚀 Features

- 🌦️ **Weather Forecasting**  
  Real-time and 7-day forecasts using WeatherAPI. Auto-location or manual input supported.

- 🌱 **Smart Crop Recommendation**  
  AI-assisted seasonal crop suggestions based on soil type and season.

- 📊 **Market Prices (Mandi Rates)**  
  Live integration with [eNAM](https://enam.gov.in) to track commodity prices.

- ⚠️ **Disaster Alerts**  
  Quick links to NDMA warnings for floods, droughts, cyclones, and locust attacks.

- 👨‍🌾 **User Authentication**  
  Simple login/register system with password hashing using bcrypt.

- 📧 **Email-ready Integration**  
  Optional welcome emails via NodeMailer (Gmail SMTP).

- 🔐 **Protected Routes**  
  Auth middleware to restrict access to certain pages (dashboard, profile, etc.).

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **APIs:** WeatherAPI.com, eNAM
- **Authentication:** bcrypt.js
- **Email Service:** Nodemailer
- **Environment Management:** dotenv

---

## 📂 Project Structure

Agrisena/
├── frontend/
│ ├── index.html
│ ├── dashboard.html
│ ├── weather.html
│ ├── crops.html
│ ├── profile.html
│ ├── Agrisen.css
│ └── script.js
├── models/
│ └── User.js
├── .env
├── server.js
├── package.json
└── README.md



---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/agrisena.git
   cd agrisena
Install dependencies

bash
Copy
Edit
npm install
Create a .env file

env
Copy
Edit
PORT=3000
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password_or_app_password
Run the server

bash

node server.js
Open in browser
Visit http://localhost:3000

📌 To-Do / Future Improvements
Session-based authentication or JWT

Image upload for profile

Multilingual support

Responsive mobile UI

AI crop disease detection
## 📸 Screenshots

### 🏠 Homepage
Homepage(./assets/homepage.png)

### 📊 Dashboard
![Dashboard](./assets/dashboard.png)



🧑‍💻 Author
Developed by: JAYAPRAKASH-Jena
🌐 Portfolio: 00000
📫 Email: jayaprakashjena824@gmail.com

