const express = require('express');
const app = express();
const port = 3000;

// GET /hello
app.get('/hello', (req, res) => {
  res.json({
    message: "Hello World",
    dateTime: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
