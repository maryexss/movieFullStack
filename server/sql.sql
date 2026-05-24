-- Active: 1738665443110@@sql.freedb.tech@3306@freedb_dateloger
CREATE TABLE `movies` (
    `id` int unsigned NOT NULL AUTO_INCREMENT,
    `title` varchar(255) NOT NULL,
    `release_data` date NOT NULL,
    `rating` decimal(2, 1) NOT NULL,
    `duration` int NOT NULL,
    `description` text NOT NULL,
    `filename` varchar(255) NOT NULL,
    `poster_url` varchar(255) DEFAULT NULL,
    `likes` int DEFAULT '0',
    PRIMARY KEY (`id`)
)