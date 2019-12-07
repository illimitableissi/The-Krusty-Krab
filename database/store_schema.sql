DROP DATABASE IF EXISTS krusty_krab; 

CREATE DATABASE krusty_krab; 

USE krusty_krab; 

CREATE TABLE Item_Type(
    item_type_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
    item_type VARCHAR(255) NOT NULL
);

CREATE TABLE Menu_Items(
    item_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
    item_name VARCHAR(255) NOT NULL, 
    item_type_id INT NOT NULL, 
    item_price FLOAT NOT NULL, 
    item_calories INT NOT NULL, 
    UNIQUE (item_name),
    FOREIGN KEY (item_type_id) REFERENCES Item_Type(item_type_id)
);

CREATE TABLE Items_Ordered(
st_item_ordered INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
item_name VARCHAR(255) NOT NULL, 
order_id INT NOT NULL, 
quantity INT NOT NULL, 
item_price FLOAT NOT NULL, 
total_price_item FLOAT NOT NULL, 
FOREIGN KEY (item_name) REFERENCES Menu_Items(item_name)
);

CREATE TABLE Orders(
    customer_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
    order_date DATETIME NOT NULL, 
    order_time DATETIME NOT NULL, 
    order_total FLOAT NOT NULL
);
