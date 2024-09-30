
select name , bonus from Employee INNER JOIN Bonus on employee.empId = Bonus.empId where bonus < 1000 ASC;
