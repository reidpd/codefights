/*Please add ; after each select statement*/
CREATE PROCEDURE mischievousNephews()
BEGIN

ALTER TABLE mischief ADD author_id INT;
UPDATE mischief SET author_id = 1 WHERE author = 'Huey';
UPDATE mischief SET author_id = 2 WHERE author = 'Dewey';
UPDATE mischief SET author_id = 3 WHERE author = 'Louie';

SELECT weekday(mischief_date) AS weekday, mischief_date, author, title
FROM mischief m
ORDER BY weekday, author_id, mischief_date, title;

END
