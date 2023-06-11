// require('dotenv').config();
// const mongoose = require('mongoose');
// const User = require('./models/User');
// const Post = require('./models/Post')

// const MONGODB_URI = process.env.MONGODB_URI;

// mongoose.set('debug', true);


// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });


// mongoose.connection
//   .on('open', () => console.log('You are connected to MongoDB- seed.js'))
//   .on('close', () => console.log("You are disconnected from MongoDB-seed.js"))
//   .on('error', (error) => console.error("MongoDB connection error:-seed.js", error));



// const userSeed = [
//     {
//         name: 'Erica',
//         username: 'erica',
//         email: 'erica@gmail.com',
//         password: 'password'
//     },
//     {
//         name: 'Eric',
//         username: 'eric',
//         email: 'eric@gmail.com',
//         password: 'password1'
//     },
//     {
//         name: 'Jonathan',
//         username: 'jonathan',
//         email: 'jon@gmail.com',
//         password: 'password2'
//     },
//     {
//         name: 'Jael',
//         username: 'jael',
//         email: 'jael@gmail.com',
//         password: 'password3'
//     },
//     {
//         name: 'Shawn',
//         username: 'shawn',
//         email: 'shawn@gmail.com',
//         password: 'password4'
//     },
// ]

// const seedUsers = async () => {
//     try {
     
//       await User.insertMany(userSeed);
  
//       console.log('Test users seeded successfully.');
//     } catch (error) {
//       console.error('Error seeding users:', error);
//     } finally {
      
//       mongoose.disconnect();
//     }
//   };

// seedUsers()

// const postSeed = [
//     {
//         name: 'Erica',
//         username: 'erica',
//         post: "Erica's first decrypt post",
//         date: {type: Date, default: Date.now},
//         likes: 0,
//         recrypts: 0,
//         comments: 0,
//     },
//     {
//         name: 'Eric',
//         username: 'eric',
//         post: "Eric's first decrypt post",
//         date: {type: Date, default: Date.now},
//         likes: 1,
//         recrypts: 1,
//         comments: 1,
//     },
//     {
//         name: 'Jonathan',
//         username: 'jonathan',
//         post: "Jon's first decrypt post",
//         date: {type: Date, default: Date.now},
//         likes: 2,
//         recrypts: 2,
//         comments: 2,
//     },
//     {
//         name: 'Erica',
//         username: 'erica',
//         post: "Erica's second decrypt post",
//         date: {type: Date, default: Date.now},
//         likes: 100,
//         recrypts: 50,
//         comments: 30,
//     },
//     {
//         name: 'Jael',
//         username: 'jael',
//         post: "Jael's first decrypt post",
//         date: {type: Date, default: Date.now},
//         likes: 3,
//         recrypts: 3,
//         comments: 3,
//     },
//     {
//         name: 'Shawn',
//         username: 'shawn',
//         post: "Shawn's first decrypt post",
//         date: {type: Date, default: Date.now},
//         likes: 4,
//         recrypts: 4,
//         comments: 4,
//     },
// ]

// const seedPosts = async () => {
//     try {
     
//       await Post.insertMany(postSeed);
  
//       console.log('Test posts seeded successfully.');
//     } catch (error) {
//       console.error('Error seeding posts:', error);
//     } finally {
      
//       mongoose.disconnect();
//     }
//   };

// seedPosts()