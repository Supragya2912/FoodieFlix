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

module.exports = {
  connectToDatabase,
  FoodCategory,
  FoodItem,
};
