const mongoose = require('mongoose');

// Connection URL
const url = 'mongodb://localhost:27017/foodieflix';

// Connect to the MongoDB server
const connectToDatabase = () => {
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

  // Connection events
  mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });

  mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('MongoDB connection closed');
      process.exit(0);
    });
  });
};

const FoodCategorySchema = new mongoose.Schema({
  CategoryName: String
});

const FoodItemSchema = new mongoose.Schema({
  CategoryName: String,
  name: String,
  img: String,
  options: [{
    half: String,
    full: String
  }],
  description: String
});

const FoodCategory = mongoose.model('FoodCategory', FoodCategorySchema);
const FoodItem = mongoose.model('FoodItem', FoodItemSchema);

const fetchDataAndLog = async () => {
  try {
    await connectToDatabase();

    // Fetch data from the database
    const foodItems = await FoodItem.find();
    const foodCategories = await FoodCategory.find();

    // Creating a global variable to store the fetched data
    global.foodItems = foodItems;
    global.foodCategories = foodCategories;
    // console.log(global.foodItems);
    // console.log(global.foodCategories);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Call the fetchDataAndLog function to fetch data when the server starts
fetchDataAndLog();

module.exports = {
  connectToDatabase,
  FoodCategory,
  FoodItem,
  global
};
