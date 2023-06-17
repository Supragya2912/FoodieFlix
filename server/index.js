const express = require('express');
const app = express();
const port = 3001;
const { connectToDatabase, FoodCategory, FoodItem } = require('./mongo');
const cors = require('cors');

//connect to database
connectToDatabase();

app.use(cors(
    {
        origin: 'http://localhost:3000',
    }
));

app.use(express.json());
app.use('/foodie',require('./routes/user_routes'));

app.get('/', (req, res) => res.send('Helloo World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));