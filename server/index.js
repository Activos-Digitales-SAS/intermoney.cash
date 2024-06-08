const express = require('express');
const cors = require('cors');
const db = require('./src/db');

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/video', (req, res) => {
  const query = 'SELECT video_url FROM video LIMIT 1';

  db.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching video URL:', err);
      res.status(500).send('Server error');
      return;
    }

    res.json({ videoUrl: result[0].video_url });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
