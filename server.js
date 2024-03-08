const express = require("express");
const axios = require('axios'); 
const bodyParser = require('body-parser');
const mime = require('mime')
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

// mime
mime.define({
  'application/json': ['json'],
}, { force: true });

// pasery
// Content-type: application/json
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Dostosuj '*', aby zezwalać tylko na konkretne domeny
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post('/htmlCode', async (req, res) => {
  const response = await axios.get(req.body.url).then(({ data }) => (data));
  res.send(response);
});
