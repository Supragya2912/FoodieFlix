const express = require('express');
const app = express();
const port = 5000;
const { connectToDatabase, FoodCategory, FoodItem } = require('./mongo');

//connect to database
connectToDatabase();

app.use(express.json());
app.use('/foodie',require('./routes/user_routes'));

app.get('/', (req, res) => res.send('Helloo World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));