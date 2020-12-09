var pgp = require('pg-promise')(/*options*/);

var db = pgp('postgres://postgres:pass@localhost:5432/reviews');

const getReviews = (productId, callback) => {
  db.query('SELECT * FROM reviews WHERE product_id = $1', productId)
    .then(results => {
      callback(results);
    })
    .catch(error => {
      callback('ERROR: ', error);
    });
};

/*
TODO: add in photo object which is queried THUSLY:
(SELECT photo_url FROM review_photos WHERE review_id IN
  (SELECT review_id
    FROM reviews
    WHERE product_id = $2'), productId
TODO: how to get photo_url AND photo_id back from this query??
*/

const getMeta = (productId) => {
  db.query('', productId)
    .then(results => {
      callback(results);
    })
    .catch(error => {
      callback('ERROR: ', error);
    });
};

/*
product_id: passed in from req
ratings: select ratings from reviews where product_id = productId
recommended: select recommended from reviews where product_id = productId
characteristics: select values from characteristics where
*/

// TODO: three separate db queries? reviews, characteristics, photos?
const addReview = (productId, rating, summary, body, recommend, name, email, photos, characteristics, callback) => {
  db.query('INSERT INTO reviews(product_id, rating, summary, body, recommend, reviewer_name, reviewer_email')
    .then(results => {
      callback(results);
    })
    .catch(error => {
      callback('ERROR: ', error);
    });
};

const addHelpful = (reviewId, callback) => {
  db.query('UPDATE reviews SET helpfulness = helpfulness + 1 WHERE reviewId = $1 RETURNING *', reviewId)
    .then(results => {
      callback(results);
    })
    .catch(error => {
      callback('ERROR: ', error);
    });
};

const reportReview = (reviewId) => {
  db.query('UPDATE reviews SET reported = true WHERE review_id = $1 RETURNING *', reviewId)
    .then(resluts => {
      callback(results);
    })
    .catch(error => {
      callback('ERROR: ', error);
    });
};

module.exports = {
  getReviews, getMeta, addReview, addHelpful, reportReview
};