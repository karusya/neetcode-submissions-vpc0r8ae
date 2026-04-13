-- Write your query below
SELECT DISTINCT a.seat_id 
FROM cinema a
JOIN cinema b ON ABS(a.seat_id - b.seat_id) = 1
WHERE a.free = 1 and b.free = 1