DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

\c reviews;

DROP TABLE IF EXISTS characteristics, reviews, characteristics_reviews, review_photos CASCADE;

CREATE TABLE characteristics (
 characteristics_id SERIAL PRIMARY KEY,
 product_id INT,
 name VARCHAR (50)
);

CREATE TABLE reviews (
  review_id SERIAL PRIMARY KEY,
  product_id INT,
  rating INT,
  review_date DATE,
  summary VARCHAR(255),
  body varchar(1000),
  recommend BOOLEAN,
  reported BOOLEAN,
  reviewer_name VARCHAR(255),
  reviewer_email VARCHAR(255),
  response VARCHAR(1000),
  helpfulness INT
);

CREATE TABLE characteristics_reviews (
  id SERIAL PRIMARY KEY,
  characteristics_id INT references characteristics(characteristics_id),
  review_id INT references reviews(review_id),
  char_value NUMERIC
);

CREATE TABLE review_photos (
  photo_id SERIAL PRIMARY KEY,
  review_id INT references reviews(review_id),
  photo_url VARCHAR(255)
);

COPY characteristics(characteristics_id, product_id, name)
FROM '/Users/kelakealakai/work/reviews/csv-files/characteristics.csv'
DELIMITER ','
CSV HEADER;

COPY reviews(review_id, product_id, rating, review_date, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness)
FROM '/Users/kelakealakai/work/reviews/csv-files/reviews.csv'
DELIMITER ','
CSV HEADER;

COPY characteristics_reviews(id, characteristics_id, review_id, char_value)
FROM '/Users/kelakealakai/work/reviews/csv-files/characteristic_reviews.csv'
DELIMITER ','
CSV HEADER;

COPY review_photos(photo_id, review_id, photo_url)
FROM '/Users/kelakealakai/work/reviews/csv-files/reviews_photos.csv'
DELIMITER ','
CSV HEADER;

-- TODO: create meta table:
-- product_id
-- ratings:
  -- object with rating number out of 5 and number of ratings given to each
-- recommended:
  -- number of reviews who recommended vs did not
-- characteristics
  -- name
    -- char_id
    -- avg of all values for review of this characteristic