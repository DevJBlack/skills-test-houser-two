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

{
        "name": "City Station",
        "address": "644 W. N. Temple",
        "city": "Salt Lake City",
        "state": "UT",
        "zip": 84116
},
 {
        "house_id": 4,
        "name": "Growing Up",
        "address": "724 S. 600 W.",
        "city": "Payson",
        "state": "UT",
        "zip": 84651
 }