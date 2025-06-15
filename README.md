# Secure Auth Dashboard

A full-stack authentication dashboard built with React and FastAPI, backed by a MySQL database.  
Includes secure login, signup, password recovery, and a dynamic user table to manage registered users. Designed with scalability, clean UI, and best practices in full-stack development.

---

## Features

- User registration and login with token-based authentication
- Forgot password and password reset flow
- Dashboard with registered user data
- React frontend with protected routes
- FastAPI backend with RESTful APIs
- MySQL for structured, persistent data storage

---

## Tech Stack

- **Frontend:** React, JavaScript, CSS 
- **Backend:** Python, FastAPI
- **Database:** MySQL
- **Authentication:** Basic Auth
- **Other Tools:** Axios, React Router, dotenv

---

## Installation

### Backend (FastAPI)

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/secure-auth-dashboard.git
   cd secure-auth-dashboard/backend
   ```
2. Set up a virtual environment
   ```bash
   python -m venv venv
   source venv/bin/activate  # Windows: venv\Scripts\activate
   ```
3. Install dependencies
   ```bash
    pip install -r requirements.txt
    Create a .env file with your DB credentials and JWT secret
    ```
4. Run the server
   ```bash
    uvicorn main:app --reload
   ```
   
### Frontend (React)
1. Navigate to the frontend
   ```bash
   cd ../frontend
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Start the development server
   ```bash
   npm run dev
   ```

## Folder Structure

secure-auth-dashboard/
│
├── backend/
│   ├── app/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── schemas/
│   │   ├── services/
│   │   ├── utils/
│   │   └── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md

## License
This project is licensed under the MIT License.
