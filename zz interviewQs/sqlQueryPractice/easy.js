


// ----------------------------------------------------------------------------

    //  TABLE......

// customers (
//   id INT,
//   name VARCHAR,
//   region VARCHAR
// )

// products (
//   id INT,
//   name VARCHAR,
//   price INT
// )

// orders (
//   id INT,
//   customer_id INT,
//   product_id INT,
//   quantity INT,
//   order_date DATE
// )

// ----------------------------------------------------------------------------

// Q2: Get each customer’s name and the number of orders they placed


// SELECT 
// 	c.name,
// 	COUNT(o.id) AS total_count
// FROM 
// 	customers c
// JOIN 
// 	orders o ON c.id = o.customer_id
// GROUP BY 
// 	c.name;


// ----------------------------------------------------------------------------


// Q3: List the products that have never been ordered. 


// SELECT 
// 	p.name,
// FROM 
// 	products p
// LEFT JOIN
// 	orders o ON p.id = o.product_id
// WHERE 
// 	o.product_id IS NULL;


// ----------------------------------------------------------------------------

// Q4: List customers who never placed an order.

// SELECT 
// 	c.name
// FROM
// 	customers c
// LEFT JOIN 
// 	orders o ON c.id = o.customer_id
// WHERE 
// 	o.customer_id IS NULL

// ----------------------------------------------------------------------------

// Q5: List most ordered product per region

// SELECT 
// 	c.region,
// 	p.name AS product_name,
// 	COUNT(*) AS order_count, 
// FROM 
// 	customers c
// JOIN 
// 	orders o ON c.id = o.customer_id
// JOIN
// 	products p ON o.product_id = p.id
// GROUP BY c.region,p.name;


// ----------------------------------------------------------------------------