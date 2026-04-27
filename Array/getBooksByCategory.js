


const books = [
    { name: "Atomic Habits", category: "selfhelp", age: 5 },
    { name: "Deep Work", category: "selfhelp", age: 7 },
    { name: "Harry Potter", category: "fiction", age: 20 },
    { name: "Clean Code", category: "programming", age: 15 },
    { name: "The Alchemist", category: "fiction", age: 25 }
];

function getBooksByCategory(books, cat) {
    // reduce option
    const res = books.reduce((acc, book) => {
        const category = book.category;
        if (category === cat) {
            if (!acc[category]) acc[category] = [];
            acc[category].push(book);
        }
        return acc;
    }, {})
    return res;

    // filter option
    // const selfHelpBooks = books.filter(b => b.category === "selfhelp");
    // return selfHelpBooks;
}

console.log(getBooksByCategory(books, "selfhelp"));