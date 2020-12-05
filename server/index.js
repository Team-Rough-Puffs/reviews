const express = require('express');
const app = express();
const port = 3001;
const db = require('../database/index');

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('hey');
});

app.get('/reviews', (req, res) => {
  var page = req.params.page;
  var count = req.params.count;
  var sort = req.params.sort;
  var productId = req.params.product_id;
  db.query(`SELECT ${count} FROM reviews WHERE product_id = ${productId} ORDER BY ${sort} DESC`, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.get('/reviews/meta', (req, res) => {
  var productId = req.params.product_id;
  res.status(200).send('meta goes here');
});

app.post('/reviews', (req, res) => {
  var page = req.params.page;
  var rating = req.params.rating;
  var summary = req.params.summary;
  var body = req.params.body;
  var recommend = req.params.recommend;
  var name = req.params.name;
  var email = req.params.email;
  var photos = req.params.photos;
  var characteristics = req.params.characteristics;
  res.status(200).send('review posted');
});

app.put('/reviews/:review_id/helpful', (req, res) => {
  var reviewId = req.params.review_id;

  res.status(200).send('review marked helpful');
});

app.put('/reviews/:review_id/report', (req, res) => {
  var reviewId = req.params.review_id;
  res.status(200).send('reported');
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});