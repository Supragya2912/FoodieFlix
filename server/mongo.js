const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb://localhost/foodieflix', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
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

   //creating a global variable to store the fetched data
    global.foodItems = foodItems;
    global.foodCategories = foodCategories;
    // console.log(global.foodItems);

    // Close the MongoDB connection
    mongoose.connection.close();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Call the function to fetch and log the data
fetchDataAndLog();

module.exports = {
  connectToDatabase,
  FoodCategory,
  FoodItem,
  global
};
