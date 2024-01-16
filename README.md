# MERN Stack Secrets App with JWT Authentication

Live link: [MERN Secrets App](https://moonlit-cobbler-38f457.netlify.app/)

## Introduction

This documentation provides a detailed overview of the MERN (MongoDB, Express, React, Node.js) stack Secrets app with JWT (JSON Web Token) authentication. The application allows users to view and share their secrets anonymously. The front end is built using React and Material-UI, while the back end is deployed on render.com. Below are the key features, architecture, and instructions for running the application.

## Table of Contents

1. [Overview](#overview)
2. [Key Features](#key-features)
3. [Architecture](#architecture)
4. [Requirements](#requirements)
5. [Installation & Setup](#installation--setup)
6. [How to Use](#how-to-use)
7. [Conclusion](#conclusion)

## Overview

The MERN stack secrets app with JWT authentication is a web application that allows users to share secrets in a user-friendly interface. Users can browse existing secrets and create secrets to share with others anonymously. The application uses JWT for secure authentication and authorization of users.

## Key Features

1. **User Authentication:** Users can sign up and log in to access the app's features. JWT is used for secure token-based authentication.
2. **Secrets Listing:** The app displays a list of secrets with details.
3. **Secret Creation:** Authenticated users can share secrets with others. Each user can share only one secret.
4. **Material-UI:** The front end is designed using Material-UI to provide an intuitive and visually appealing user interface.

## Architecture

The application follows the MERN stack architecture:

- **Frontend:** Built using React and Material-UI for the user interface.
- **Backend:** Developed using Node.js with Express for handling API requests and MongoDB as the database.
- **Authentication:** JWT (JSON Web Token) is used for user authentication and authorization.
- **Deployment:** The backend is deployed on render.com, while the frontend can be hosted on Netlify.

## Requirements

- Node.js and npm are installed on the local machine.
- MongoDB database or connection URI (e.g., provided by MongoDB Atlas).
- render.com account or alternative hosting for backend deployment.

## Installation & Setup

### Backend Setup:

1. Clone the repository from GitHub.
2. Navigate to the backend directory: `cd server`.
3. Install the required packages: `npm install`.
4. Create a `.env` file in the backend directory to store environment variables. Include the following variables:
   - `MONGODB_URI`: MongoDB connection URI.
5. Run the backend server: `npm run nodemon`.

### Frontend Setup:

1. Navigate to the frontend directory: `cd client`.
2. Install the required packages: `npm install`.
3. Open the `src/hooks/useGetRequestUrl.js` file and set the `REQUEST_URL` to your backend server URL.
4. Run the frontend development server: `npm start`.

## How to Use

1. Upon opening the app, users are presented with a Home screen.
2. Users can create an account or log in using their credentials.
3. After authentication, users are directed to the secrets listing page, where they can view and interact with existing secrets.
4. To create a new secret, users can navigate to the "Compose" page and fill in the necessary details.
5. To log out, users can click on the logout button.

## Conclusion

The MERN stack recipe app with JWT authentication provides a seamless platform for users to share and create secrets. By following this documentation, you can set up and run the application on your local machine or deploy it to a hosting service. The app's modular architecture allows for easy future enhancements and scalability. Enjoy exploring and experimenting with this secret-sharing app!
