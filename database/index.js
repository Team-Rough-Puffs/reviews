const Client = require('pg').Client;
const pgConfig = require('./config.js');

const connection = new Client(pgConfig);

connection.connect();

const getReviews = (count, productId, callback) => {
  connection.query('SELECT ? FROM reviews WHERE product_id = ?', [count, productId], (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
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