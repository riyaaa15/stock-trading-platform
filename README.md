# Stock Trading Platform

A full-stack stock trading platform clone inspired by Zerodha, built for learning. It has a landing website, a trading dashboard, and a Node.js backend with authentication.

## Features

- Responsive landing page (Home, Pricing, Support and Product pages)
- Trading dashboard with watchlist, holdings, positions and orders
- Buy and Sell order windows (orders are saved in MongoDB, holdings update on Buy and Sell)
- Charts for watchlist and holdings (Chart.js)
- Signup and Login with hashed passwords (bcrypt) and JWT
- Protected routes and Logout
- Component tests with Jest and React Testing Library

## Tech Stack

- **Landing page:** React, Vite, Bootstrap
- **Dashboard:** React, Vite, Material UI, Chart.js, Axios
- **Backend:** Node.js, Express, MongoDB Atlas, Mongoose
- **Authentication:** bcrypt, JSON Web Tokens
- **Testing:** Jest, React Testing Library

## Project Structure

- `frontend/` : landing website
- `dashboard/` : trading dashboard
- `backend/` : Express API and MongoDB models

## Run Locally

**Requirements:** Node.js and a MongoDB Atlas connection string.

1. Clone the repository:

        git clone https://github.com/riyaaa15/stock-trading-platform.git
        cd stock-trading-platform

2. Install dependencies in each folder:

        cd backend && npm install
        cd ../dashboard && npm install
        cd ../frontend && npm install

3. Create a `backend/.env` file:

        MONGO_URL=your_mongodb_connection_string
        JWT_SECRET=any_long_random_secret

4. Start the backend (runs on http://localhost:3002):

        cd backend
        npm start

5. Start the dashboard in a new terminal:

        cd dashboard
        npm run dev

6. Open the dashboard link shown in the terminal and go to `/signup` to create an account. After login you will see the dashboard.

7. To run the landing page, open another terminal:

        cd frontend
        npm run dev

Holdings and positions are empty on a new database. Place a Buy order from the watchlist to add holdings.

## Run Tests

    cd frontend
    npm test

## Note

Stock prices are dummy data. This project is for learning purposes only.