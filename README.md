# <strong>Social Network API

[![Node.js](https://img.shields.io/badge/Node.js-14.x-green?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-orange?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.x-green?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Mongoose](https://img.shields.io/badge/Mongoose-5.x-blue?style=for-the-badge&logo=mongoose&logoColor=white)](https://mongoosejs.com/)
[![pnpm](https://img.shields.io/badge/pnpm-latest-blue?style=for-the-badge&logo=pnpm&logoColor=white)](https://pnpm.io/)
[![Insomnia](https://img.shields.io/badge/Insomnia-latest-lightgrey?style=for-the-badge&logo=insomnia&logoColor=white)](https://insomnia.rest/)

## Table Of Contents

- [Description](#description)
- [Screenshot](#screenshot)

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contribution)
- [Tests](#tests)
- [Portfolio](#portfolio)
- [License](#license)

<img src="https://img.shields.io/github/repo-size/alghaibb/social-network-api?style=plastic" alt="GitHub repo size"><br>
<img src="https://img.shields.io/github/languages/top/alghaibb/social-network-api?style=plastic" alt="GitHub top language"></p>

## Description

The Social Network API is a backend application that provides functionality for managing users, thoughts, and reactions in a social network platform. It leverages a MongoDB database and is built using Node.js and Express. The API allows users to create accounts, share thoughts, add reactions to thoughts, and manage their friends within the network.

<a href="#table-of-contents">Back to Table of Contents</a>

### Motivation

The motivation behind building this API was to create a robust and scalable backend for a social networking platform. It enables users to interact with each other by sharing thoughts and reactions while also managing their social connections. The API is designed to be flexible, allowing easy integration with front-end applications or other services.

<a href="#table-of-contents">Back to Table of Contents</a>

### Why I Built This

The Social Network API was developed as part of a coding challenge during my bootcamp. The challenge provided an opportunity to apply and enhance my skills in backend development, particularly in building APIs for social applications. The goal was to create a solution that not only met the requirements of the challenge but also served as a practical and adaptable tool for future projects. Through this challenge, I aimed to push my boundaries, learn new concepts, and showcase my ability to deliver a functional and efficient API.

<a href="#table-of-contents">Back to Table of Contents</a>

### Problem Solved

The Social Network API project aims to solve the problem of building a robust backend infrastructure for social networking platforms. It addresses several key challenges in the development of social applications by providing a pre-built API with the following solutions:

1. **User Management**: The API facilitates the creation, update, and deletion of user accounts. It streamlines user profile management, allowing developers to focus on user experience rather than the intricacies of account handling.

2. **Thought Sharing**: Users can post thoughts, view all thoughts, and retrieve individual thoughts. This feature simplifies the implementation of a thought-sharing mechanism in social applications.

3. **Reactions**: The API enables users to add reactions to thoughts or remove reactions they previously added. Handling reactions is a common requirement in social platforms, and the API provides a structured approach to implement this functionality.

4. **Friendship Management**: Users can add or remove friends, enhancing the social aspect of the platform. Managing friendships is a fundamental feature in social networking, and the API provides a seamless solution for developers to implement and extend.

5. **Scalable and Modular Design**: The project follows a modular and organized design using Express.js routing. This makes it easy for developers to understand and extend the functionality based on the specific needs of their application.

6. **Database Interaction**: The API integrates with MongoDB through Mongoose, abstracting away the complexities of database interactions. This simplifies data storage and retrieval, allowing developers to focus on application logic.

7. **Learning Resource**: Beyond solving immediate development challenges, the project serves as a learning resource. Developers can explore the codebase to understand best practices in Express.js routing, MongoDB integration, error handling, and RESTful API design.

By providing these solutions, the Social Network API project accelerates the development process for social applications, allowing developers to concentrate on creating engaging features and enhancing user interactions rather than spending time on building and troubleshooting complex backend functionality.

<a href="#table-of-contents">Back to Table of Contents</a>

### What I Learned

During the development of the Social Network API, I gained valuable skills and insights, including:

1. **Express.js Routing**: I learned how to create organized and modular routes using Express.js, making it easier to manage different API endpoints.

2. **MongoDB Integration with Mongoose**: I acquired the ability to connect and interact with a MongoDB database using Mongoose. This involved creating models, designing schemas, and performing CRUD operations.

3. **Error Handling Strategies**: I implemented effective error handling strategies to enhance the reliability of the API, dealing with various types of errors and providing meaningful error messages.

4. **RESTful API Design**: I practiced designing RESTful API endpoints, following best practices for creating scalable and predictable APIs.

5. **Backend Development Best Practices**: I developed a better understanding of backend development best practices, including code organization, separation of concerns, and modular component creation for scalability.

6. **Asynchronous JavaScript**: I became proficient in handling asynchronous operations in JavaScript, especially when dealing with database queries and external requests.

7. **Mongoose Virtuals**: I used Mongoose virtuals to create computed properties within data models, such as calculating the total count of reactions on a thought or the total count of friends for a user.

8. **Git and Version Control**: I improved my skills in version control using Git, allowing me to manage changes, collaborate with others, and maintain a versioned history of the code.

9. **Problem-Solving Skills**: I faced and resolved challenges related to API development, database interactions, and other aspects of building a social networking backend.

10. **Documentation Practices**: I practiced documenting my code, evident in the comments and structure of the codebase. Clear documentation is crucial for collaboration and future maintenance.

These experiences collectively contribute to my growth as a backend developer, providing a solid foundation for building scalable, maintainable, and efficient APIs for social networking or other applications.

<a href="#table-of-contents">Back to Table of Contents</a>

## Screenshot

<p align="center">
  <img alt="screenshot" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHJ1c2RqbWhzN21waGNjeXBmZ3l1N2wzeHBnbDdsMHlyZGJtdWdqbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RHt1VLtlIlBT70yoHq/giphy.gif" width="400px"><br>
  Live Sreenshot GIF
</p>

<a href="#table-of-contents">Back to Table of Contents</a>

## Technologies

<a href="#table-of-contents">Back to Table of Contents</a>

## Installation

1. **Clone the Repository:**

git clone https://github.com/your-username/social-network-api.git

2. **Navigate to the Project Directory**:

cd social-network-api

3. **Install Dependencies**:

npm install

4. **Configure MongoDB Connection**:

Open `connection.js` in the `config` directory.
Update the `process.env.MONGODB_URI` variable with your MongoDB connection URI or set it as an environment variable.

5. **Start the Server**:

npm start

6. **Access the API**:
   Open your web browser or use a tool like Postman/Insomnia to interact with the API.

API base URL: http://localhost:3001/

## Additional Notes

- Ensure that you have Node.js and npm installed on your machine before running the installation commands.

- MongoDB should be installed and running. Update the connection URI in connection.js to match your MongoDB configuration.

- The default port for the API is 3001. If you need to change it, modify the PORT variable in server.js.

- Review the API routes and functionalities by referring to the provided controllers and routes in the controllers and routes directories.

- For a more secure deployment, consider using environment variables for sensitive information like database credentials and connection strings.

<a href="#table-of-contents">Back to Table of Contents</a>

## Usage

1. **Clone the Repository**:
   git clone https://github.com/alghaibb/social-network-api.git

2. **Navigate to the Project Directory**:
   cd social-network-api

3. **Install Dependencies using pnpm**:
   pnpm install

4. **Configure MongoDB Connection**:
   Open connection.js in the config directory.
   Update the process.env.MONGODB_URI variable with your MongoDB connection URI or set it as an environment variable.

5. **Start the Server**:
   pnpm start

6. **Access the API**:
   Open your web browser or use a tool like Postman/Insomnia to interact with the API.
   API base URL: http://localhost:3001

## API Endpoints

### Users

- **GET All Users:**

  - Endpoint: `/api/users`
  - Retrieve a list of all users.

- **GET User by ID:**

  - Endpoint: `/api/users/:id`
  - Retrieve user details by providing the user's ID.

- **POST Create User:**

  - Endpoint: `/api/users`
  - Create a new user by providing user details in the request body.

- **PUT Update User by ID:**

  - Endpoint: `/api/users/:id`
  - Update user details by providing the user's ID and new information in the request body.

- **DELETE User by ID:**

  - Endpoint: `/api/users/:id`
  - Delete a user by providing the user's ID.

- **POST Add Friend:**

  - Endpoint: `/api/users/:userId/friends/:friendId`
  - Add a friend to a user's friend list by providing user and friend IDs.

- **DELETE Remove Friend:**
  - Endpoint: `/api/users/:userId/friends/:friendId`
  - Remove a friend from a user's friend list by providing user and friend IDs.

### Thoughts

- **GET All Thoughts:**

  - Endpoint: `/api/thoughts`
  - Retrieve a list of all thoughts.

- **GET Thought by ID:**

  - Endpoint: `/api/thoughts/:thoughtId`
  - Retrieve thought details by providing the thought's ID.

- **POST Create Thought:**

  - Endpoint: `/api/thoughts`
  - Create a new thought by providing thought details in the request body.

- **PUT Update Thought by ID:**

  - Endpoint: `/api/thoughts/:thoughtId`
  - Update thought details by providing the thought's ID and new information in the request body.

- **DELETE Thought by ID:**

  - Endpoint: `/api/thoughts/:thoughtId`
  - Delete a thought by providing the thought's ID.

- **POST Add Reaction to Thought:**

  - Endpoint: `/api/thoughts/:thoughtId/reactions`
  - Add a reaction to a thought by providing the thought ID and reaction details in the request body.

- **DELETE Remove Reaction from Thought:**
  - Endpoint: `/api/thoughts/:thoughtId/reactions/:reactionId`
  - Remove a reaction from a thought by providing the thought and reaction IDs.

<a href="#table-of-contents">Back to Table of Contents</a>

## Contribution

## How to Contribute

1. **Fork the Repository**: Click on the "Fork" button at the top right corner of this repository to create your copy.

2. **Clone the Repository**: Clone your forked repository to your local machine.

   ```bash
   git clone https://github.com/alghaibb/social-network-api.git

   ```

3. **Create a branch**: Create a new branch for your feature or bug fix.

   ```bash
   git checkout -b feature/your-feature

   ```

4. **Make Changes**: Implement your feature or fix the bug. Ensure your code follows the existing coding style and conventions.

5. **Test Locally**: Test your changes locally to ensure they work.

6. **Commit Changes**: Commit your changes with a clear and descriptive commit message.

   ```bash
   git commit -m "Add/fix feature: your description"

   ```

7. **Push Changes**: Push your branch to your forked repository.

   ```bash
   git push origin feature/your-feature

   ```

8. **Create a Pull Request**: Open a pull request from your fork to the main repository. Provide a clear title and description for your changes.

### Code Style and Guidelines

- Follow existing code style and conventions.

- Write clear and concise code with comments where necessary.

- Ensure your code passes any existing tests.

### Report Issues

If you encounter any issues or have suggestions, please open an issue on the GitHub repository. Provide detailed information about the problem, including steps to reproduce it.

### Attribution

All contributors will be acknowledged in the project's README. By contributing, you agree to the Contributor Covenant Code of Conduct.

Happy coding! 🚀

<a href="#table-of-contents">Back to Table of Contents</a>

## Tests

🚀 Thank you for testing the Social Network API! Follow the instructions below to ensure that the API functions as expected.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [pnpm](https://pnpm.io/) package manager (or npm if you prefer).

## Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/social-network-api.git

   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd social-network-api

   ```

3. **Install Dependencies**:

   ```bash
   pnpm install

   ```

4. **Configure MongoDB Connection**:

- Open connection.js in the config directory.
- Update the process.env.MONGODB_URI variable with your MongoDB connection URI or set it as an environment variable.

5. **Start the Server**:
   ```bash
   pnpm start
   ```

## Testing API Endpoints

Use your preferred API testing tool (e.g., Postman or Insomnia) or a web browser to test the API endpoints.

### Users

#### GET All Users:

- Endpoint: http://localhost:3001/api/users
- Verify that a list of users is returned.

#### GET User by ID:

- Endpoint: http://localhost:3001/api/users/:id
- Replace :id with a valid user ID.
- Verify that user details are returned.

#### POST Create User:

- Endpoint: http://localhost:3001/api/users
- Provide user details in the request body.
- Verify that a new user is created.

#### PUT Update User by ID:

- Endpoint: http://localhost:3001/api/users/:id
- Replace :id with a valid user ID.
- Provide updated user details in the request body.
- Verify that the user details are updated.

#### DELETE User by ID:

- Endpoint: http://localhost:3001/api/users/:id
- Replace :id with a valid user ID.
- Verify that the user is deleted.

### Thoughts

#### GET All Thoughts:

- Endpoint: http://localhost:3001/api/thoughts
- Verify that a list of thoughts is returned.

#### GET Thought by ID:

- Endpoint: http://localhost:3001/api/thoughts/:thoughtId
- Replace :thoughtId with a valid thought ID.
- Verify that thought details are returned.

#### POST Create Thought:

- Endpoint: http://localhost:3001/api/thoughts
- Provide thought details in the request body.
- Verify that a new thought is created.

#### PUT Update Thought by ID:

- Endpoint: http://localhost:3001/api/thoughts/:thoughtId
- Replace :thoughtId with a valid thought ID.
- Provide updated thought details in the request body.
- Verify that the thought details are updated.

#### DELETE Thought by ID:

- Endpoint: http://localhost:3001/api/thoughts/:thoughtId
- Replace :thoughtId with a valid thought ID.
- Verify that the thought is deleted.

#### POST Add Reaction to Thought:

- Endpoint: http://localhost:3001/api/thoughts/:thoughtId/reactions
- Replace :thoughtId with a valid thought ID.
- Provide reaction details in the request body.
- Verify that a reaction is added to the thought.

#### DELETE Remove Reaction from Thought:

- Endpoint: http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId
- Replace :thoughtId and :reactionId with valid thought and reaction IDs.
- Verify that the reaction is removed from the thought.

Feel free to explore and test other scenarios based on your project's functionalities.

<a href="#table-of-contents">Back to Table of Contents</a>

## Portfolio

Visit my portfolio:
[](N/A)

<a href="#table-of-contents">Back to Table of Contents</a>

## License

This application is covered under the following licence:

<p><img src="https://img.shields.io/static/v1?label=License&message=MIT&color=blue" alt="License"></p>
