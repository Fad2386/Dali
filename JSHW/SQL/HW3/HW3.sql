-- 1. Вывести клиентов из Germany, у которых в имени есть вхождение a, и клиентов из France, у которых в имени есть вхождение b

SELECT * FROM Customers
	WHERE Country is 'Germany' 
	AND CustomerName Like '%a%' 
		OR Country is 'France' 
		AND CustomerName Like '%b%'

-- 2. Вывести два самых дешевых товара, названия которых заканчиваются на u.

SELECT * FROM Products
	WHERE ProductName LIKE '%u'
		ORDER BY Price
			LIMIT 2

-- 3. Применить постоянную скидку к товарам из категорий 1 и 3, причем:

-- A. для категории 1 - скидка 29%

-- B. для категории 3 - 0.5%
SELECT *, CASE
        WHEN CategoryID = 1 THEN price * 0.71
        WHEN CategoryID = 3 THEN price * 0.995
        ELSE price
    END AS discounted_price
FROM products;

-- 4. Вывести данные о компаниях-перевозчиках, причем скрыть номера телефонов тех компаний, 
-- которые из Australia (проекция: название_компании, номер_телефона)

SELECT SupplierName, Phone,
CASE
      WHEN Country = 'Australia' THEN 'Phone_count'
      ELSE Phone
      END AS Phone_number
FROM Suppliers

-- Для проверки 

SELECT SupplierName, Phone, Country,
CASE
      WHEN Country = 'Australia' THEN 'Phone_count'
      ELSE Phone
      END AS Phone_number
FROM Suppliers

-- 5. Вывести города клиентов не из Germany и города поставщиков не из USA

SELECT DISTINCT  City AS customer_city
FROM Customers
WHERE Country <> 'Germany'

UNION

SELECT DISTINCT City
FROM Suppliers
WHERE Country <> 'USA';