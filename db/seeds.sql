CREATE TABLE houser (
    house_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    address VARCHAR,
    city VARCHAR,
    state VARCHAR(2),
    zip INTEGER
)


INSERT INTO houser ( name, address, city, state, zip )
VALUES ('City Station', '644 W N.Temple','Salt Lake City', 'UT', 84116)