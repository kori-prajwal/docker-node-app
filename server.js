const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Prajwal! Your DevOps project is live.');
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
