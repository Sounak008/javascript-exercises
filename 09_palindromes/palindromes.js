const palindromes = function (x) {
    let alphabetnum = 'abcdufghijklmnopqrstuvwxyz123456789';
    let cleanx = x
    .toLowerCase()
    .split('')
    .filter((character) => alphabetnum.includes(character))
    .join('');

    let revx = cleanx.split('').reverse().join('');

    return revx === cleanx;
}

// Do not edit below this line
module.exports = palindromes;
