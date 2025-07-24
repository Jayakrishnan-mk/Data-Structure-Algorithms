


// ⚙️ Tables:

// 🛍️ products
// | id | name | price | category_id |

// 👥 customers
// | id | name | region |

// 🛒 cart_items
// | id | customer_id | product_id | quantity |

// 📦 orders
// | id | customer_id | product_id | quantity |

// ----------------------------------------------------------------------------


// Q ; "List customers whose carts only contain products from a single category"


// SELECT
// 	c.name,
// 	COUNT(DISTINCT p.category_id) AS categoryCount
// FROM
// 	customers c
// JOIN 
// 	cart_items ci ON c.id=ci.customer_id
// JOIN
// 	products p ON ci.product_id=p.id
// GROUP BY
// 	c.id,c.name
// HAVING
// 	COUNT(DISTINCT p.category_id) = 1;


// ----------------------------------------------------------------------------


// 🧠 Q: List products that have never been ordered but are present in some customers’ carts.


// SELECT 
// 	p.name
// FROM
// 	products p
// LEFT JOIN 
// 	orders o ON p.id=o.product_id
// JOIN
// 	cart_items ci ON p.id=ci.product_id
// WHERE 
// 	o.product_id IS NULL
// GROUP BY
// 	p.name;


// ----------------------------------------------------------------------------

// 🧠 Q: List products that have never been ordered but are present in some customers’ carts.



// 🛍️ products
// | id | name | price | category_id |

// 👥 customers
// | id | name | region |

// 🛒 cart_items
// | id | customer_id | product_id | quantity |

// 📦 orders
// | id | customer_id | product_id | quantity |




















