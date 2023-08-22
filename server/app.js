const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 5000;

let db = new sqlite3.Database('./db/sample.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the sample.db database.');
});

app.get('/', (req, res) => {
  db.serialize(() => {
    db.all(`SELECT * FROM tablename`, (err, rows) => {
      if (err) {
        console.error(err.message);
      }
      res.send(rows);
    });
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
