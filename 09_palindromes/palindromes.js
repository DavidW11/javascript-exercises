const palindromes = function (word) {

    // should make string lower case from the start
    // can also you array reversal method shown in solution 
    
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    
    let left = 0;
    let right = word.length-1;

    while (left<right) {
        while (!alphanumerical.includes(word[left].toLowerCase())) {
            left++;
        }
        while (!alphanumerical.includes(word[right].toLowerCase())) {
            right--;
        }
        if (word[left].toLowerCase()!==word[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
