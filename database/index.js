const Client = require('pg').Client;
const pgConfig = require('./config.js');

const client = new Client(pgConfig);

client.connect();

const getReviews = () => {

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