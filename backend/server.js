// // server.js
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(bodyParser.json());

// app.post('/api/data', (req, res) => {
//   const formData = req.body;
//   console.log('Received form data:', formData);
//   // Handle the received form data here, e.g., store it in a database
//   res.json({ message: 'Form data received successfully' });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS

app.use(bodyParser.json());

app.post('/api/data', (req, res) => {
  const formData = req.body;
  console.log('Received form data:', formData);
  // Handle the received form data here, e.g., store it in a database
  res.json({ message: 'Form data received successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
