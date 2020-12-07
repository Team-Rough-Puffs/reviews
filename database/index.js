var pgp = require('pg-promise')(/*options*/);

var db = pgp('postgres://postgres:pass@localhost:5432/reviews');

// db.one('SELECT $1 AS value', 123)
//   .then(function (data) {
//     console.log('DATA:', data.value);
//   })
//   .catch(function (error) {
//     console.log('ERROR:', error);
//   });

const getReviews = (productId, callback) => {
  db.query('SELECT * FROM reviews WHERE product_id = $1', productId)
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
  db.query('')
};

const addHelpful = () => {

};

const reportReview = () => {

};

module.exports = {
  getReviews, getMeta, addReview, addHelpful, reportReview
};