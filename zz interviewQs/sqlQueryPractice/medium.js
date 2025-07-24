



// ⚙️ Tables:

// products(id, name)

// cart_items(id, product_id, quantity, user_id)


// Q1. List all products that were never added to any cart.


// SELECT 
// 	p.name
// FROM
// 	products p
// LEFT JOIN
// 	cart_items c ON p.id = c.product_id
// WHERE 
// 	c.product_id IS NULL;


// ----------------------------------------------------------------------------

// ⚙️ Tables:

// customers (id, name)

// cart_items (customer_id, product_id, quantity)


// 🧩 Q2: List each customer and how many products they added to cart (even 0).


// pseudo:
// customers and cartItemCount of customer each.


// SELECT
// 	c.name,
// 	COUNT(ci.id) AS cartItemCount
// FROM
// 	customers c
// LEFT JOIN
// 	cart_items ci ON c.id = ci.customer_id
// GROUP BY 
// 	c.id, c.name;


// ----------------------------------------------------------------------------


// 🧠 Tables you'll need:

// products(id, name)

// cart_items (id, customer_id, product_id, quantity)

// 🧠 Q3: Which product has the highest total quantity in all carts?


// SELECT 
// 	p.name,
// 	SUM(ci.quantity) AS total
// FROM
// 	products p
// JOIN 
// 	cart_items ci ON p.id = ci.product_id
// GROUP BY
// 	p.id,p.name
// ORDER BY
// 	total DESC
// LIMIT 1;


// ----------------------------------------------------------------------------

// ⚙️ Tables:

// customers (id, name)

// cart_items (customer_id, product_id, quantity)


// Q4: Which customer added the most number of total items to their cart?


// SELECT 
// 	c.name,
// 	SUM(ci.quantity) AS cartItemCount
// FROM
// 	customers c
// JOIN 
// 	cart_items ci ON c.id = ci.customer_id
// GROUP BY
// 	c.id, c.name
// ORDER BY
// 	cartItemCount DESC
// LIMIT 1;
	

// ----------------------------------------------------------------------------

// ⚙️ Tables:

// customers (id, name)

// cart_items (customer_id, product_id, quantity)


// Q5: Get the number of distinct products in each customer’s cart.

// take the count of products in cart items
// group by customer id and name
// count of cart item.id

// SELECT 
// 	c.name,
// 	COUNT(DISTINCT ci.product_id) AS productCount
// FROM
// 	customers c
// LEFT JOIN
// 	cart_items ci ON c.id = ci.customer_id
// GROUP BY 
// 	c.id,c.name;


// ----------------------------------------------------------------------------

// ⚙️ Tables:

// customers (id, name)

// cart_items (customer_id, product_id, quantity)


// Show only customers with 3 or more distinct products in their cart.


// SELECT
// 	c.name,	
// 	COUNT(DISTINCT ci.product_id) AS productCount
// FROM 
// 	customers c
// LEFT JOIN
// 	cart_items ci ON c.id=ci.customer_id
// GROUP BY
// 	c.id,c.name
// HAVING 
// 	productCount > 3;


// ----------------------------------------------------------------------------
