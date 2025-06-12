

// Build a function that handles a GET request to /sum with query params a and b, 
// and returns a JSON response with their sum.

function findSum(req, res) {
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);
    res.json({ result: a + b });
}

// ---------------------------------------

// Build a function to handle a POST request to /register.
// The request body contains:
// {
//   "username": "jayakrishnan",
//   "password": "secret123"
// }
// Validate that both fields are present and return:
// 201 if successful.
// 400 if any field is missing.

function register(req, res) {
    let { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "Required fields missing!" });
    }
    res.status(201).json({ message: "User registered successfully." })
}

// ---------------------------------------

// Handle a GET request to /sum?a=4&b=6.
// Return a JSON like:
// { "sum": 10 }

function getSum(req, res) {
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);

    res.json({ sum: a + b })
}

// ---------------------------------------


// Handle GET /user/:id.
// Return this format:
// { "id": 5, "name": "Alice" }

// If ID not found, return:
// { "error": "User not found" }

function getUser(req, res) {
    let id = parseInt(req.params.id);

    let users = [{ id: 5, name: "Alice" }];

    let user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ error: "User not found" })
    }
    res.json(user);
}

// ---------------------------------------

// POST /count
// Request body:
// { "text": "hello" }

// Response:
// { "h": 1, "e": 1, "l": 2, "o": 1 }

function getCount(req, res) {
    let text = req.body.text || '';
    let freq = {};

    for (let i of text) {
        freq[i] = (freq[i] || 0) + 1;
    }
    res.json(freq);
}

// function getCount(req, res) {
//     let text = req.body.text || '';
//     let freqMap = new Map();

//     for (let i = 0; i < text.length; i++) {
//         if (!freqMap.has(text[i])) {
//             freqMap.set(text[i], 1);
//         } else {
//             freqMap.set(text[i], freqMap.get(text[i]) + 1);
//         }
//     }

//     let myObj = Object.fromEntries(freqMap);
//     res.status(201).json({ result: myObj });
// }

// ---------------------------------------

// GET /palindrome?word=madam
// Return:
// { "isPalindrome": true }


function isPalindrome(req, res) {
    let input = req.query.word;

    let reversed = input.split('').reverse().join('');
    res.json({ isPalindrome: input === reversed })
}

// function isPalindrome(req, res) {
//     let input = req.query.word;
//     let last = input.length - 1;
//     let flag = false;
//     for (let i = 0; i < input.length / 2; i++) {
//         if (input[i] !== input[last]) {
//             flag = true;
//             break;
//         }
//         last--;
//     }

//     if (flag) {
//         res.json({ isPalindrome: false });
//     } else {
//         res.json({ isPalindrome: true });
//     }
// }

// ---------------------------------------

// Create an API endpoint that receives a POST request with name, email, and age in the request body.

// Return 400 if any field is missing.
// Return 400 if age is not a number.
// Else, return a success response with the user data.

function userData(req, res) {
    const { name, email, age } = req.body;
    if (!name || !email || !age) return res.status(400).json({ error: "Missing fields." });
    if (typeof age !== "number") return res.status(400).json({ error: "Age is not a number" });
    res.status(201).json({ name, email, age });
}

// ---------------------------------------

// Create a POST API endpoint that accepts a sentence in the body like:

// { "sentence": "Hello world, welcome to HackerRank!" }
// Return the number of words in the sentence (separated by spaces) as:

// { "wordCount": 5 }

function findWordCount(req, res) {
    let sentence = req.body.sentence || '';
    let words = sentence.trim().split(/\s+/).filter(Boolean);
    res.json({ wordCount: words.length });
}

// function findWordCount(req, res) {
//     let sentence = req.body.sentence || '';
//     let count = 1;
//     for (let i = 0; i < sentence.length; i++) {
//         if (sentence[i] === ' ' && sentence[i + 1] !== ' ' && sentence[i + 1]) {
//             count++;
//         }
//     }
//     res.json({ wordCount: count });
// }



