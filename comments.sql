CREATE TABLE `comments`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `author` VARCHAR(255) NOT NULL,
    `text` TEXT NOT NULL,
    `movie_id` INT UNSIGNED NOT NULL
);
ALTER TABLE
    `comments` ADD CONSTRAINT `comments_movie_id_foreign` FOREIGN KEY(`movie_id`) REFERENCES `movies`(`id`);