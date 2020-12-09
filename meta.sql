\c reviews

DROP TABLE IF EXISTS meta;

CREATE TABLE meta (
  product_id INT,
  ratings json,
  recommended json,
  characteristics json NOT NULL
)

