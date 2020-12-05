const express = require('express');
const app = express();
const port = 3001;
const db = require('../database/index');

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('hey');
});

app.get('/reviews', (req, res) => {
  var count = req.query.count;
  var productId = req.query.product_id;
  db.getReviews(count, productId, (err, results) => {
    if (err) {
      res.status(500).send(err);
      console.log(count, productId); //SEND ERR ONLY FOR TESTING PURPOSES. DO NOT SEND THE ENTIRE ERR BACK IRL
    } else {
      res.send(results);
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