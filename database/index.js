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

// TODO: create meta table

const getMeta = (productId) => {
  db.query('SELECT * FROM meta WHERE product_id = $1', productId)
    .then(results => {
      callback(results);
    })
    .catch(error => {
      callback('ERROR: ', error);
    });
};
// TODO: three separate db queries? one to
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
  db.query('UPDATE reviews SET helpfulness = helpfulness + 1 WHERE reviewId = $1', reviewId)
    .then(results => {
      callback(results);
    })
    .catch(error => {
      callback('ERROR: ', error);
    });
};

const reportReview = () => {

};

module.exports = {
  getReviews, getMeta, addReview, addHelpful, reportReview
};