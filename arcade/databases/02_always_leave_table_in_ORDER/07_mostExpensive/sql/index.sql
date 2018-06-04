/*Please add ; after each select statement*/
CREATE PROCEDURE mostExpensive()
BEGIN
	ALTER TABLE Products ADD subtotal INTEGER;
  UPDATE Products SET subtotal = price * quantity;
  SELECT name FROM Products ORDER BY subtotal DESC, name ASC LIMIT 1;
END
