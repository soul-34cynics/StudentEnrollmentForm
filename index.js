const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

console.log("Starting server...");

// JPDB API details
const jpdbBaseUrl = 'http://api.login2explore.com:5577';
const jpdbIML = '/api/iml';
const connectionToken = '90932169|-31949215212527132|90963935';

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

console.log("Middleware setup completed.");

// API Endpoints

// Create
app.post('/data', async (req, res) => {
  console.log("POST /data request received.");
  try {
    const newData = req.body;
    const response = await axios.post(`${jpdbBaseUrl}${jpdbIML}`, {
      token: connectionToken,
      dbName: 'SCHOOL-DB',
      rel: 'STUDENT-TABLE',
      cmd: 'PUT',
      jsonStr: JSON.stringify(newData),
    });

    console.log("Data added:", response.data);
    res.status(201).json({
      status: 'success',
      message: 'Data added successfully',
      data: response.data
    });
  } catch (error) {
    console.error('Error adding data:', error.response ? error.response.data : error.message);
    res.status(500).json({
      status: 'error',
      message: 'Error adding data',
      error: error.response ? error.response.data : error.message
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
