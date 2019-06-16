create database if not exists `bamazon`;

use `bamazon`;

CREATE TABLE `products` (
    
    `item_id` INT NOT NULL AUTO_INCREMENT,
    `product_name` VARCHAR(255) NULL,
    `department_name` VARCHAR(255) NULL,
    `price` DECIMAL(10,2) NULL,
    `stock_quantity` INT NOT NULL DEFAULT 0,    

    PRIMARY KEY (`item_id`)
);
