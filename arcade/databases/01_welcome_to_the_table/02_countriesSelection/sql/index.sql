/*Please add ; after each select statement*/
CREATE PROCEDURE countriesSelection()
BEGIN
	SELECT * FROM countries WHERE continent LIKE "Africa";
END
