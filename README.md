MERN Stack Secrets App with JWT Authentication Documentation Live link: (https://moonlit-cobbler-38f457.netlify.app/)

Introduction: This documentation provides a detailed overview of the MERN (MongoDB, Express, React, Node.js) stack Secret app with JWT (JSON Web Token) authentication. The application allows users to view, and share their Secret anonymously. The front end is built using React and Material-UI, while the back end is deployed on render.com. Below are the key features, architecture, and instructions for running the application.

Table of Contents:

Overview
Key Features
Architecture
Requirements
Installation & Setup
How to Use
Conclusion
1. Overview: The MERN stack secrets app with JWT authentication is a web application that allows users to share secret in a user-friendly interface. Users can browse existing secrets, and create secret to share with others anonymously. The application uses JWT for secure authentication and authorization of users.

2. Key Features:

User Authentication: Users can sign up and log in to access the app's features. JWT is used for secure token-based authentication.
Secrets Listing: The app displays a list of secrets with details.
Secret Creation: Authenticated users can share them with others.Each user can share one Secret only.
Material-UI: The front end is designed using Material-UI to provide an intuitive and visually appealing user interface.

3. Architecture: The application follows the MERN stack architecture:

Frontend: Built using React and Material-UI for the user interface.
Backend: Developed using Node.js with Express for handling API requests and MongoDB as the database.
Authentication: JWT (JSON Web Token) is used for user authentication and authorization.
Deployment: The backend is deployed on render.com, while the front end can be hosted on Netlify.
4. Requirements:

Node.js and npm are installed on the local machine.
MongoDB database or connection URI (e.g., provided by MongoDB Atlas).
render.com account or alternative hosting for backend deployment.
5. Installation & Setup: Follow these steps to set up the MERN recipe app on your local machine:

Backend Setup:

Clone the repository from GitHub.
Navigate to the backend directory: cd server.
Install the required packages: npm install.
Create a .env file in the backend directory to store environment variables. Include the following variables:
MONGODB_URI: MongoDB connection URI.
Run the backend server: npm run nodemon.
Frontend Setup:

Navigate to the frontend directory: cd client.
Install the required packages: npm install.
Open the src/hooks/useGetRequestUrl.js file and set the REQUEST_URL to your backend server URL.
Run the frontend development server: npm start.
6. How to Use:

Upon opening the app, users are presented with a Home screen.
Users can create an account or log in using their credentials.
After authentication, users are directed to the secrets listing page, where they can view and interact with existing secrets.
To create a new secret, users can navigate to the "Compose" page and fill in the necessary details.
To log out, users can click on the logout button.

8. Conclusion: The MERN stack recipe app with JWT authentication provides a seamless platform for users to share, and create secret. By following this documentation, you can set up and run the application on your local machine or deploy it to a hosting service. The app's modular architecture allows for easy future enhancements and scalability. Enjoy exploring and experimenting with this secret sharing app!
