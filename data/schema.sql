create database if not exists `bamazon`;

use `bamazon`;

CREATE TABLE `products` (
    `item_id` INT NOT NULL AUTO_INCREMENT,
    `product_name` VARCHAR(45) NULL,
    `department_name` VARCHAR(45) NULL,
    `price` DECIMAL(10,2) NULL,
    `stock_quantity` VARCHAR(45) NULL,
    
    PRIMARY KEY (`item_id`)
);
