/*Please add ; after each select statement*/
CREATE PROCEDURE monthlyScholarships()
BEGIN
    UPDATE scholarships SET scholarship = scholarship / 12.0;
    SELECT * FROM scholarships;
END
