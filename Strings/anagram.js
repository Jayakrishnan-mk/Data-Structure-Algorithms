const str1 = 'Anagram';
const str2 = 'nagArAm';

// make 2 frequencyCounterObjects
// loop these strings and add the values and the count two separate freqCounterObjects
// then check the conditions
// first the obj.lengths are same or not
// then the values and the counts

console.log(checkAnagram(str1, str2));

function checkAnagram(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    // first check the length of each objects same.
    if (str1.length !== str2.length) return false;

    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    for (let i of str1) {
        frequencyCounter1[i] = (frequencyCounter1[i] || 0) + 1;
    }

    for (let i of str2) {
        frequencyCounter2[i] = (frequencyCounter2[i] || 0) + 1;
    }
    console.log('freq1', frequencyCounter1);
    console.log('freq2', frequencyCounter2);

    for (let i in frequencyCounter1) {
        if (!i in frequencyCounter2) return false;
        if (frequencyCounter1[i] !== frequencyCounter2[i]) return false;
    }
    return true;
}    
