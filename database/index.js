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

const addReview = () => {

};

const addHelpful = () => {

};

const reportReview = () => {

};

module.exports = {
  getReviews, getMeta, addReview, addHelpful, reportReview
};