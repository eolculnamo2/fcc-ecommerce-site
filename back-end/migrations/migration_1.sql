CREATE TABLE user (
  uuid varchar(128) UNIQUE,
  email varchar(200) UNIQUE,
  password varchar(500) DEFAULT NULL,
  first_name varchar(200) DEFAULT NULL,
  last_name varchar(200) DEFAULT NULL,
  enabled tinyint(1) DEFAULT NULL,

  PRIMARY KEY (uuid)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;