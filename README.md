# ✅ SimpleToDoApp

SimpleToDo is a task management web application that allows users to create, update, and manage their to-do lists efficiently. Users can sign up, log in, and track their tasks with a simple and intuitive interface.

## 🌍 Live Demo
🔗 Visit the live application here: [SimpleToDo App](https://simpletodoapp-sigma.vercel.app/login)

## 🛠️ Technologies Used
- **Frontend:** React.js, Tailwind CSS, Vite ⚛️🎨⚡
- **Backend:** Node.js, Express.js, MongoDB 🟢🚀
- **Authentication:** JWT (JSON Web Token) 🔐
- **Hosting:** Vercel (Frontend) ▲, Render (Backend) ☁️

## 📌 Setup Instructions

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/KeijiPlata/simpletodoapp.git
cd simpletodoapp
```

### 2️⃣ Backend Setup
```sh
cd backend
npm install
```
Create a `.env` file in the `backend` directory and add:
```sh
MONGO_URI=your_mongodb_connection_string
PORT=4000
JWT_SECRET=your_secret_key
```
Start the backend server:
```sh
npm run dev
```

### 3️⃣ Frontend Setup
```sh
cd ../simpletodoapp
npm install
```
Create a `.env` file in the `simpletodoapp` directory and add:
```sh
VITE_API_URL=http://localhost:4000
```
Start the frontend:
```sh
npm run dev
```

## 🚀 Usage
1. Open the application in your browser.
2. Sign up for an account.
3. Log in to access your tasks.
4. Add, edit, and manage your to-do list effortlessly.

## 📜 License
This project is open-source and available for use under the MIT license.

