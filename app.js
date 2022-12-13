const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config({ path: 'config.env' });

const app = express();
const url = process.env.MONGO_URL || '';
const port = process.env.PORT || 6000;

//middle wares
app.use(cors());
app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
//routing
app.use('/', require('./routes/todo.route'));

// db connection
mongoose.connect(url, () => {
  app.listen(port, () => {
    console.log(`app is connected to mongodb and run on port ${port}`);
  });
});
