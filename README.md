# sky mart server

## live server :  https://backend-2-pi.vercel.app/

This backend project is built using Node.js, Express, and MongoDB. It provides API endpoints for user, product, and cart functionalities.

## Table of Contents

- [Introduction](#introduction)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Local Setup](#local-setup)
- [Routes](#routes)
- [Features](#features)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This Node.js backend project serves as the API server for an e-commerce application. It is responsible for handling user authentication, managing products, and managing user shopping carts. The project uses Express.js as the web framework, MongoDB for the database, and provides RESTful API endpoints for different functionalities.

## Dependencies

The project uses various dependencies, including:
- `bcrypt`: Password hashing library
- `cookie-parser`: Middleware for parsing cookies
- `cors`: Middleware for enabling Cross-Origin Resource Sharing
- `dotenv`: Library for loading environment variables
- `express`: Web framework for Node.js
- `http-status`: Library for HTTP status codes
- `jsonwebtoken`: Library for generating JSON Web Tokens (JWT)
- `mongoose`: MongoDB object modeling for Node.js
- `zod`: Schema validation library

## Installation

Ensure you have Node.js and MongoDB installed on your system.

1. Clone the repository:

   ```bash
   git clone https://github.com/belalhossain22000/skymart-server.git

2. Navigate to the project directory:

   ```bash
   cd backend-2


3. Install dependencies:

   ```bash
    npm install
    # or
    yarn install


### Local Setup
    Before running the server, create a .env file in the root directory and define the required environment variables

    PORT=3000
    MONGO_URI=<your-mongodb-uri>
    JWT_SECRET=<your-jwt-secret>


### Routes
    The API provides the following routes:
 
    * User Route: /api/users
    POST /api/users/create-user - Register a new user
    POST /api/users/login-user - User login
    POST /api/users//logout-user - User logout
    Other user-related endpoints
    
    * Product Route: /api/products
    GET /api/products - Get all products
    POST /api/products - Create a new product
    GET /api/products/id - Get Single product
    Other product-related endpoints

    * Cart Route: /api/carts
    GET /api/carts/:id - Get user cart
    POST /api/carts/add - Add item to user's cart
    Other cart-related endpoints

## Features
* User Authentication: Register, login, and authenticate users securely.
* Product Management: CRUD operations for managing products.
* Cart Handling: Add, remove, and update items in the shopping cart.
* Authorization: Implement role-based access control for different user             functionalities. 

## Usage
    To start the server locally, run the following command:
    npm start
    # or for development with nodemon
    npm run dev
