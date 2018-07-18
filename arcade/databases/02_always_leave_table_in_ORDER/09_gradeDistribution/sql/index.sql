/*Please add ; after each select statement*/
CREATE PROCEDURE gradeDistribution()
BEGIN

SELECT Name, ID
FROM Grades g
WHERE final > ((midterm1 * 0.25) + (midterm2 * 0.25) + (final * 0.5)) -- option 1
AND final > ((midterm1 * 0.5) + (midterm2 * 0.5)) -- option 2
ORDER BY LEFT(name, 3), id;

END
