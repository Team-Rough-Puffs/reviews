const express = require('express');
const app = express();
const port = 3001;
const db = require('../database/index');

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('hey');
});

app.get('/reviews', (req, res) => {
  var productId = req.query.product_id;
  db.getReviews(productId, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(results);
    }
  });
});

app.get('/reviews/meta', (req, res) => {
  var productId = req.query.product_id;
  res.status(200).send('meta goes here');
});

app.post('/reviews', (req, res) => {
  var page = req.query.page;
  var rating = req.query.rating;
  var summary = req.query.summary;
  var body = req.query.body;
  var recommend = req.query.recommend;
  var name = req.query.name;
  var email = req.query.email;
  var photos = req.query.photos;
  var characteristics = req.query.characteristics;
  res.status(200).send('review posted');
});

app.put('/reviews/:review_id/helpful', (req, res) => {
  var reviewId = req.query.review_id;

  res.status(200).send('review marked helpful');
});

app.put('/reviews/:review_id/report', (req, res) => {
  var reviewId = req.query.review_id;
  res.status(200).send('reported');
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});