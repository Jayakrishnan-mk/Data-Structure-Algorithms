

// rytsense technologies - mongo query q

// You are designing a MongoDB schema for an e-commerce platform that handles millions of transactions daily. Each order contains user details, product details, payment info, and shipment tracking updates.
// How would you structure the collections to optimize read and write performance?
// How would you handle query optimization when filtering orders by both date range and product category?
// What indexes would you create, and why?

// find last months revenue from orders collection(mongodb query write)





// Collections to consider: users, products, productCategories, orders, paymentDetails, and shipmentUpdates.


const lastMonthStart = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1);
const lastMonthEnd = new Date(new Date().getFullYear(), new Date().getMonth(), 1);

db.orders.aggregate([
    {
        $match: {
            createdDate: { $gte: lastMonthStart, $lt: lastMonthEnd }
        }
    },
    {
        $group: {
            _id: null,
            totalRevenue: { $sum: "$totalPrice" }
        }
    }
])


// Indexing Strategy and Query Optimization:

// For queries filtering orders by date range and product category:
// Create a compound index combining relevant fields in the order of query operations.
// For example, an index on { productCategoryId: 1, createdDate: -1 } helps efficient filtering by category and chronological sorting.
// Also consider indexing fields used frequently in queries such as userId, orderId, and productIds.

