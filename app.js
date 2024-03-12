const http = require('http');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: '5mb' }));
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  })
);

app.listen(5500, () => console.log('Server is running at http://localhost:5500'));
