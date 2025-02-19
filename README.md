
# Flashcard Learning App Backend

This is the backend for the Flashcard Learning App, a web application that allows users to create, review, and manage flashcards for learning purposes. The backend is built using Node.js, Express, and MongoDB.

## Features

- User authentication and authorization (register, login, logout)
- Create, read, update, and delete flashcards
- Review flashcards based on a spaced repetition algorithm
- Dark mode support

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- bcrypt.js
- dotenv
- Cors
- React Toastify

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/flashcard-learning-app-backend.git
   ```

2. Navigate to the project directory:
   ```bash
   cd flashcard-learning-app-backend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your environment variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   SECRET_KEY=your_secret_key
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Endpoints

### Auth Endpoints

- **Register**: POST `/auth/register`
  - Request body: `{ "username": "user", "password": "password" }`
  - Response: `{ "token": "jwt_token", "user": { "id": "user_id", "username": "user" } }`

- **Login**: POST `/auth/login`
  - Request body: `{ "username": "user", "password": "password" }`
  - Response: `{ "token": "jwt_token", "user": { "id": "user_id", "username": "user" } }`

- **Logout**: POST `/auth/logout`
  - Request header: `Authorization: Bearer jwt_token`
  - Response: `204 No Content`

### Flashcard Endpoints

- **Get All Flashcards**: GET `/flashcards`
  - Request header: `Authorization: Bearer jwt_token`
  - Response: `[ { "id": "flashcard_id", "question": "What is Node.js?", "answer": "A JavaScript runtime environment.", "box": 1, "nextReview": "2025-02-19T13:08:00Z", "user": "user_id" } ]`

- **Create Flashcard**: POST `/flashcards`
  - Request header: `Authorization: Bearer jwt_token`
  - Request body: `{ "question": "What is Node.js?", "answer": "A JavaScript runtime environment." }`
  - Response: `{ "id": "flashcard_id", "question": "What is Node.js?", "answer": "A JavaScript runtime environment.", "box": 1, "nextReview": "2025-02-19T13:08:00Z", "user": "user_id" }`

- **Update Flashcard**: PUT `/flashcards/:id`
  - Request header: `Authorization: Bearer jwt_token`
  - Request body: `{ "question": "Updated question?", "answer": "Updated answer." }`
  - Response: `{ "id": "flashcard_id", "question": "Updated question?", "answer": "Updated answer.", "box": 1, "nextReview": "2025-02-19T13:08:00Z", "user": "user_id" }`

- **Delete Flashcard**: DELETE `/flashcards/:id`
  - Request header: `Authorization: Bearer jwt_token`
  - Response: `204 No Content`

## Thought Process

### Objective
To create a backend service that allows users to manage flashcards effectively and securely. The backend should support user authentication and provide endpoints for creating, reading, updating, and deleting flashcards.

### Steps

1. **Setup Environment**: Set up the development environment by installing Node.js, Express, and MongoDB. Use Mongoose for data modeling and dotenv for managing environment variables.

2. **User Authentication**: Implement user authentication using JSON Web Tokens (JWT). Secure routes with middleware to ensure only authenticated users can access certain endpoints.

3. **CRUD Operations for Flashcards**: Develop endpoints for creating, reading, updating, and deleting flashcards. Ensure that each flashcard is associated with a user and that users can only manage their own flashcards.

4. **Spaced Repetition**: Implement a spaced repetition algorithm to determine the next review date for each flashcard. This algorithm helps optimize the review schedule for better learning retention.

5. **Error Handling**: Implement error handling for various scenarios, such as invalid requests, authentication failures, and database connection issues.

6. **Deploy to Vercel**: Configure the project for deployment on Vercel. Create a `vercel.json` configuration file and ensure environment variables are set correctly.

### Challenges

- **Database Connectivity**: Encountered issues with MongoDB connection timeouts. Increased connection timeout settings and ensured IP addresses were whitelisted in MongoDB Atlas.

- **User Authentication**: Ensuring secure user authentication and authorization. Used bcrypt for password hashing and JWT for generating secure tokens.

### Conclusion

The backend service was successfully developed to provide a robust and secure way for users to manage their flashcards. The project is now ready for deployment and use. Future improvements could include optimizing the spaced repetition algorithm and adding more advanced features for flashcard management.

## Deployment

To deploy the backend to Vercel, ensure you have a `vercel.json` file configured and follow the steps:

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy the project:
   ```bash
   vercel
   ```
