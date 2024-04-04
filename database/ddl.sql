CREATE DATABASE gestion_eventos;

CREATE TABLE location_event (
  location_id SERIAL PRIMARY KEY,
  name_location VARCHAR(255) NOT NULL,
  latitude DECIMAL(9,6),
  longitude DECIMAL(9,6),
  address_location VARCHAR(255)
);

CREATE TABLE user_info (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  user_password VARCHAR(255) NOT NULL
);


CREATE TABLE event_info (
  event_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description_event VARCHAR(255),
  event_date TIMESTAMP NOT NULL,
  location_id INT REFERENCES location_event(location_id)
);

CREATE TABLE attendance (
  attendance_id SERIAL PRIMARY KEY,
  event_id INT REFERENCES event_info(event_id),
  user_id INT REFERENCES user_info(user_id),
  attendance_date TIMESTAMP NOT NULL
);
