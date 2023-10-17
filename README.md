User Management GraphQL API
This is a User Management GraphQL API for handling user-related operations such as fetching users, creating users, updating user information, and deleting users.

Getting Started
Prerequisites
Before you begin, make sure you have the following installed:

Node.js
npm (Node Package Manager)
Redis (for caching, optional)
Installation
Clone the repository to your local machine.
bash
Copy code
git clone https://github.com/sheraz756/crudWithGraphQl.git
Navigate to the project directory.
bash
Copy code
cd user-management-graphql-api
Install the project dependencies.
bash
Copy code
npm install
Start the server.
bash
Copy code
npm start
Usage
Fetch Users with Pagination and Sorting
To get users with pagination and sorting, send a POST request to:

bash
http://154.41.229.104:4000/graphql
Query:

json
{
  "query": "query GetUsers($page: Int, $limit: Int, $sortBy: String) {
    users(page: $page, limit: $limit, sortBy: $sortBy) {
      _id
      username
      email
    }
  }",
  "variables": {
    "page": 1,
    "limit": 1,
    "sortBy": "email"
  }
}
Get All Users
To get all users, send a POST request to:

http://154.41.229.104:4000/graphql
Query:

{
  users {
    _id
    username
    email
  }
}
Create a User
To create a user, send a POST request to:

http://154.41.229.104:4000/graphql
Mutation:

mutation {
  createUser(username: "sheraz4", email: "sheraz1@g.com", password: "password") {
    _id
    username
    email
  }
}
Update a User
To update a user's information, send a POST request to:


http://154.41.229.104:4000/graphql
Mutation:


mutation {
  updateUser(id: "652d33e498c38f78dd7930ed", username: "UpdatedUser", email: "updated@gmail.com") {
    _id
    username
    email
  }
}
Delete a User
To delete a user, send a POST request to:


http://154.41.229.104:4000/graphql
Mutation:

mutation {
  deleteUser(id: "652d33e498c38f78dd7930ed") {
    success
    message
    deletedUser {
      _id
      username
      email
    }
  }
}
Caching a Specific User's Data
To cache a specific user's data, you can implement caching using Redis or other caching mechanisms at the server level.

Deployment
To deploy this GraphQL API on your VPS with Nginx and PM2, follow these steps:

Set up a VPS instance with your preferred hosting provider.

SSH into your VPS:

ssh user@154.41.229.104
Set up the server environment on your VPS, including Node.js and any necessary dependencies.

Copy your GraphQL API code to your VPS using SCP or SFTP.

Install Nginx and configure it to act as a reverse proxy for your GraphQL API.

Install and set up PM2 to manage your Node.js application.

Start your GraphQL API using PM2.