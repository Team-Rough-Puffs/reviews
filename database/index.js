var pgp = require('pg-promise')(/*options*/);

var db = pgp('postgres://postgres:pass@localhost:5432/reviews');

// db.one('SELECT $1 AS value', 123)
//   .then(function (data) {
//     console.log('DATA:', data.value);
//   })
//   .catch(function (error) {
//     console.log('ERROR:', error);
//   });

const getReviews = (count, productId, callback) => {
  db.query('SELECT * FROM reviews WHERE product_id = $1 limit $2', [productId, count])
    .then(results => {
      callback(results);
    })
    .catch(error => {
      callback('ERROR: ', error);
    });
};

const getMeta = () => {

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