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
  name: String,
  description: String,
});

const FoodItemSchema = new mongoose.Schema({
  name: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FoodCategory',
  },
  price: Number,
});

const FoodCategory = mongoose.model('FoodCategory', FoodCategorySchema);
const FoodItem = mongoose.model('FoodItem', FoodItemSchema);

module.exports = {
  connectToDatabase,
  FoodCategory,
  FoodItem,
};
