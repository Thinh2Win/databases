CREATE DATABASE chat;

USE chat;

CREATE TABLE users (

  user_id int NOT NULL AUTO_INCREMENT,
  username varchar(10),
  PRIMARY KEY(user_id)
);

CREATE TABLE roomName (

  room_id int NOT NULL AUTO_INCREMENT,
  _name varchar(10),
  PRIMARY KEY(room_id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id int NOT NULL AUTO_INCREMENT,
  txt varchar(25),
  stamp timestamp,
  user_id int,
  room_id int,
  PRIMARY KEY(id),
  FOREIGN KEY(user_id) REFERENCES users(user_id),
  FOREIGN KEY(room_id) REFERENCES roomName(room_id)
);

-- NSERT INTO table_name (column1, column2, column3, ...)
-- VALUES (value1, value2, value3, ...);



/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

