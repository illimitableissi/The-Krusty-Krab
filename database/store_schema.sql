DROP DATABASE IF EXISTS krusty_krab; 

CREATE DATABASE krusty_krab; 

USE krusty_krab; 

CREATE TABLE Item_Type(
    item_type_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
    item_type VARCHAR(255) NOT NULL,
)

CREATE TABLE menu_items(
    item_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
    item_name VARCHAR(255) NOT NULL, 
)