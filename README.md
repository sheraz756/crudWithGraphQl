for getting users by pagination or limits
http://localhost:4000/graphql
post req
{
  "query": "query GetUsers($page: Int, $limit: Int, $sortBy: String) {\n users(page: $page, limit: $limit, sortBy: $sortBy) {\n _id\n username\n email\n }\n}",
  "variables": {
    "page": 1,
    "limit": 1,
    "sortBy": "email"
  }
}
getAll users
http://localhost:4000/graphql
query {
  users {
    _id
    username
    email
  }
}
createUser
http://localhost:4000/graphql post req
mutation {
  createUser(username: "sheraz4", email: "sheraz1@g.com", password: "password") {
    _id
    username
    email
  }
}

updateUser
http://localhost:4000/graphql postreq
mutation {
  updateUser(id: "652d33e498c38f78dd7930ed", username: "UpdatedUser", email: "updated@gmail.com") {
    _id
    username
    email
  }
}
deleteUser 
http://localhost:4000/graphql postreq
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

task3:
data will fetch from cache:
http://localhost:4000/api/user/652e1c9ca83764eb933f9668
get req