/*Please add ; after each select statement*/
CREATE PROCEDURE suspectsInvestigation2()
BEGIN

SELECT id, name, surname
FROM Suspect
WHERE height < 171
OR LOWER(name) NOT LIKE 'b%'
OR LOWER(surname) NOT LIKE 'gre_n'
ORDER BY id;

END
