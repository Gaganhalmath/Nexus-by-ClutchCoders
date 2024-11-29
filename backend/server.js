const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const AuthRouter = require('./routes/AuthRouter');
const ProductRouter = require('./routes/ProductRouter');

const app = express();
require('dotenv').config();
require('./models/db');

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);

// Increase payload size limit
app.use(bodyParser.json({ limit: '10mb' })); // You can increase the limit as needed
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

// Middleware
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/nexus2');

// Routes
const profilesRouter = require('./routes/profiles');
app.use('/profiles', profilesRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
