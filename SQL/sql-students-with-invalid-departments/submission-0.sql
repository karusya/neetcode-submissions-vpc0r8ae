-- Write your query below
SELECT s.id, s.name FROM students AS s
WHERE NOT EXISTS (
    SELECT 1
    FROM departments AS d 
    WHERE s.department_id = d.id
)