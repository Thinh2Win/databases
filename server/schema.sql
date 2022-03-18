CREATE DATABASE chat;

USE chat;

CREATE TABLE users (

  id int NOT NULL PRIMARY AUTO_INCREMENT,
  username varchar(25) NOT NULL,
);

CREATE TABLE rooms(
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  room_name varchar(20) NOT NULL,
);
-- if we were to create a friends table we would make it an associative table where id's from users table would point back to the users id. We can have 2 foreign keys.
-- ex: FOREIGN KEY(from_user) REFERENCES users(id),
--      FOREIGN KEY(to_user) REFERENCES users(id),

CREATE TABLE messages (
  /* Describe your table here.*/
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  txt varchar(50) NOT NULL,
  ts DATETIME DEFAULT CURRENT_TIMESTAMP,
  user_id int NOT NULL,
  room_id int NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(room_id) REFERENCES rooms(id)
);

-- NSERT INTO table_name (column1, column2, column3, ...)
-- VALUES (value1, value2, value3, ...);



/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

