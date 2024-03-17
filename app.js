const express = require('express');
const cors = require('cors');

const { sequelize } = require('./models');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: '5mb' }));
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  })
);

sequelize
  .sync()
  .then((result) => {
    console.log(result);
    app.listen(5500, () => console.log('Server is running at http://localhost:5500'));
  })
  .catch((err) => {
    console.log(err);
  });
