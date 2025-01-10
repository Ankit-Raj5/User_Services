# User Authentication API

This project is a simple user authentication system built using **Node.js**, **Express**, and **MongoDB**. It provides the following functionalities:

- **User Registration**
- **User Login**
- **Forget Password**

## Project Structure

```
backend-project/
│
├── package.json
├── src/
│   ├── controllers/
│   │   ├── authController.js
│   ├── services/
│   │   ├── authService.js
│   ├── models/
│   │   ├── userModel.js
│   ├── routes/
│   │   ├── authRoutes.js
│   ├── config/
│   │   ├── db.js
│   ├── app.js
└── .env
```

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd backend-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and add the following environment variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. Start the server:
   ```bash
   npx nodemon src/app.js
   ```

The server will run at `http://localhost:5000`.

## API Endpoints

### 1. **User Registration**
**Endpoint:** `POST /api/users/register`

**Request Body:**
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response:**
```json
{
  "_id": "64b7f9d92b1e4f001cfb3bda",
  "username": "john_doe",
  "email": "john@example.com",
  "createdAt": "2025-01-10T12:00:00.000Z",
  "updatedAt": "2025-01-10T12:00:00.000Z"
}
```

### 2. **User Login**
**Endpoint:** `POST /api/users/login`

**Request Body:**
```json
{
  "username": "john_doe",
  "password": "securepassword123"
}
```

**Response:**
```json
{
  "user": {
    "_id": "64b7f9d92b1e4f001cfb3bda",
    "username": "john_doe",
    "email": "john@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### 3. **Forget Password**
**Endpoint:** `POST /api/users/forget-password`

**Request Body:**
```json
{
  "email": "john@example.com",
  "newPassword": "newsecurepassword123"
}
```

**Response:**
```json
{
  "message": "Password reset successful"
}
```

## Technologies Used

- **Node.js**: Runtime environment for building the backend
- **Express**: Web framework for Node.js
- **MongoDB**: NoSQL database for storing user data
- **Mongoose**: ODM for MongoDB
- **Bcrypt.js**: For hashing passwords
- **JSON Web Token (JWT)**: For user authentication
- **Dotenv**: For managing environment variables

## Middleware Used

- `express.json()`: Parses incoming requests with JSON payloads

## Error Handling
All endpoints return appropriate error responses with status codes:

- **400 Bad Request**: When required fields are missing or invalid.
- **500 Internal Server Error**: When something goes wrong on the server.

## Future Improvements
- Implement email verification during registration
- Add rate limiting to prevent brute force attacks
- Enhance error handling with better error codes and messages

## Author
This project was developed by **Ankit Rajpoot** as part of a full-stack development exercise.
