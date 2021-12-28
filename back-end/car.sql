
CREATE TABLE car (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	year INT NOT NULL,
	make VARCHAR(50) NOT NULL,
	model VARCHAR(50) NOT NULL,
	submodel VARCHAR(50) NOT NULL 
);


INSERT INTO car (year, make, model, submodel) VALUES (2003, 'Chevrolet', 'Silverado', 'LT');
INSERT INTO car (year, make, model, submodel) VALUES (2004, 'Chevrolet', 'Silverado', 'LTZ');
INSERT INTO car (year, make, model, submodel) VALUES (2003, 'GMC', 'Sierra', 'SLT');
INSERT INTO car (year, make, model, submodel) VALUES (2004, 'GMC', 'Sierra', 'SLE');
INSERT INTO car (year, make, model, submodel) VALUES (2003, 'GMC', 'Sierra', 'SLE');
