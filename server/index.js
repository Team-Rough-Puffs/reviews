const express = require('express');
const app = express();
const port = 3001;
const db = require('../database/index');
const token = 'loaderio-aae92af1cda903a31cf76c29e7129dac';

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
      res.status(201).send(results);
    }
  });
});

// TODO: add results back in once meta table is made
app.get('/reviews/meta', (req, res) => {
  var productId = req.query.product_id;
  db.getMeta(productId, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(results);
    }
  });
});

app.post('/reviews', (req, res) => {
  var productId = req.body.product_id;
  var rating = req.body.rating;
  var summary = req.body.summary;
  var body = req.body.body;
  var recommend = req.body.recommend;
  var name = req.body.name;
  var email = req.body.email;
  var photos = req.body.photos;
  var characteristics = req.body.characteristics;
  db.addReview(productId, rating, summary, body, recommend, name, email, photos, characteristics, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(results);
    }
  });
  res.status(200).send('review posted');
});

app.put('/reviews/:review_id/helpful', (req, res) => {
  var reviewId = req.query.review_id;
  db.addHelpful(reviewId, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(results);
    }
  });
  res.status(200).send('review marked helpful');
});

app.put('/reviews/:review_id/report', (req, res) => {
  var reviewId = req.query.review_id;
  db.reportReview(reviewId, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(results);
    }
  });
  res.status(200).send('reported');
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});