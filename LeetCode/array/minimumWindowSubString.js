// Minimum Window Substring - leet code - hard

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"


// pseudo code:
// Expand the window until it becomes valid.
// Once valid, keep shrinking the window until it becomes invalid.
// Store the smallest valid substring.
// Done.


var minWindow = function (s, t) {
    if (t.length > s.length) return "";

    let required = new Map();
    let window = new Map();

    // Store frequency of characters in t
    for (let char of t) {
        required.set(char, (required.get(char) || 0) + 1); // { a: 1, b: 1, c: 1 }
    }

    let left = 0;
    let right = 0;
    let have = 0;    // How many characters matched
    let need = required.size; // Total unique characters in t      //   3
    let result = [-1, -1];
    let minLength = Infinity;

    // >>>>>  // A D O B E C O D E B A N C
    while (right < s.length) {
        // Expand the window by adding s[right]
        let char = s[right];
        window.set(char, (window.get(char) || 0) + 1);

        //  >>>>> //  { a: 1, d: 0 , o: 0, b: 0, e: 0, c: 1, n: 1 }

        // If the current character count matches the required count, increase 'have'
        if (required.has(char) && window.get(char) === required.get(char)) {
            have++;
        }

        // Now try to shrink the window
        while (have === need) {
            // Update the result if the current window is smaller
            if ((right - left + 1) < minLength) {
                result = [left, right];
                minLength = (right - left + 1);
            }

            // Shrink the window from the left
            let leftChar = s[left];
            window.set(leftChar, window.get(leftChar) - 1); 
            if (required.has(leftChar) && window.get(leftChar) < required.get(leftChar)) {
                have--;
            }
            left++;
        }
        right++;
    }

    // If no valid window is found
    if (result[0] === -1) return "";

    // Return the minimum window substring
    return s.substring(result[0], result[1] + 1);
    // >>>>>  // A D O B E C O D E B A N C
    // >>>>> //  >>>>>>>>>>>>>> // B A N C
};
console.log(minWindow('ADOBECODEBANC', 'ABC'))