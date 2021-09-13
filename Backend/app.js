/** @format */
require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const moviesRoute = require('./routes/movies');
const favRoute = require('./routes/fav');

//Port

const PORT = process.env.PORT || 5000;

//Connection

mongoose
	.connect(process.env.DATABASE, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => console.log('DB CONNECTED.'))
	.catch((e) => console.log('Oops1', e));

//middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use(cookieParser());

//My Routes
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', moviesRoute);
app.use('/api', favRoute);
// app.use('/api', productRoutes);

app.listen(process.env.PORT, () => console.log(`app is running at ${PORT}`));
