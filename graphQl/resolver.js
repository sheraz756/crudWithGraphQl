const User = require('../model/user')
const logger = require('../logging/logger')
const resolvers = {
  Query: {
    users: async (_, { page = 1, limit = 10, sortBy = '_id' }) => {
      try {
        const users = await User.find()
          .skip((page - 1) * limit)
          .limit(limit)
          .sort(sortBy);
  
        return users;
      } catch (error) {
        logger.error('Error fetching user', { error });
        throw new Error("Could not fetch users.");
      }
    },
  },
    Mutation: {
      createUser: async (_, { username, email, password }) => {
        try {
            
    
            // Create a new user
            const user = new User({
              username,
              email,
              password
            });
    
            const savedUser = await user.save();
    
            return savedUser; 
          } catch (error) {
            logger.error('Error Creating user', { error });

            throw new Error("Could not create the user.");
          }
      },
      updateUser: async (_, { id, username, email, password }, context) => {
   
        const updatedFields = {};
        if (username) {
          updatedFields.username = username;
        }
        if (email) {
          updatedFields.email = email;
        }
        if (password) {
       
          updatedFields.password = password; 
        }
  
        try {
          const updatedUser = await User.findByIdAndUpdate(id, updatedFields, { new: true });
  
          return updatedUser;
        } catch (error) {
        logger.error('Error update user', { error });

          throw new Error('Failed to update user information');
        }
      },
      deleteUser: async (_, { id }, context) => {
  
        try {
          const deletedUser = await User.findByIdAndRemove(id);
  
          if (deletedUser) {
            return {
              success: true,
              message: 'User deleted successfully',
              deletedUser: deletedUser ? JSON.stringify(deletedUser) : null,

            };
          } else {
            return {
              success: false,
              message: 'User not found',
              deletedUser: deletedUser ? JSON.stringify(deletedUser) : null,

            };
          }
        } catch (error) {
        logger.error('Error delete user', { error });

          return {
            success: false,
            message: 'Failed to delete user',
            deletedUser: null,
          };
        }
      },
    
    },
   
  };
  
  module.exports = resolvers;
  