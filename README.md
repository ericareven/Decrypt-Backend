Decrypt
Decrypt is a social media application designed exclusively for cyber security enthusiasts. It serves as a platform similar to Twitter, where users can connect with like-minded individuals and engage in discussions related to cyber security. The application focuses on providing a secure and private environment for users to share their thoughts, insights, and knowledge in the field of cyber security.

Live Application
You can access the live application of Decrypt at https://decrypt-backend.herokuapp.com.

Frontend Repository
You can find the frontend repository at https://github.com/ericareven/Decrypt-Frontend


Technologies Used
MongoDB
Express.js
React.js 
Node.js
JWT
bcrypt
Heroku
Bootstrap

Installation
To run Decrypt locally, make sure you have the following dependencies installed:

Backend:

Express
Mongoose
Nodemon
Dotenv
Cors
Method-override
JSONWebToken
bcrypt
Frontend:

React
React Modal
React Bootstrap
Tailwind CSS
Models
Decrypt utilizes the following models:

Post Schema:
name: {type: String},
username: {type: String},
text: {type: String},
image: String,
date: {type: Date, default: Date.now},
likes: Number,
recrypts: Number,
comments: Number,

User Schema:
name: {
type: String,
required: true
},  
username: {
type: String,
required: true,
unique:true
},
email: {
type: String,
required: true,
unique:true
},
password: {
type: String,
required: true
},


Post Routes:
router.get('/', postCtrl.getPost)
router.post('/', postCtrl.createPost)
router.put('/:id', postCtrl.editPost)
router.delete('/:id', postCtrl.deletePost)

User Routes:
router.post('/register', register)
router.post('/signin', signin)
router.get('/me', protect, findMe)

User Stories
AAU I want to be able to register and login to the app
AAU I want to be able to be able to create, edit, and delete posts
AAU I want to be able to like or comment on other users' posts
AAU I want to be able to view my and other users' profile page
AAU I want the app to be user friendly and engaging

MVP Goals
Full CRUD
User Auth
User ability to add, edit, delete posts

Stretch Goals
Profile page - one to many relationships (user to posts)
Direct message other users
User ability to like or comment on other users' posts but not have the option to edit or delete them
Search feature to find user

Next Steps:
Enhanced styling
Mobile Responsive Design
Profile page - one to many relationships (user to posts)
Direct message other users
User ability to like or comment on other users' posts but not have the option to edit or delete them
Search feature to find user

# Decrypt-Backend
GA Capstone
