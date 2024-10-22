const num ={
    0:'zero',
    1:'one',
    2:'two',
    3:'three',
    4:'four',
    5:'five',
    6:'six',
    7:'seven',
    8:'eight',
    9:'nine',
}

const tenNum={
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',}

    const tens = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    };

module.exports = function toReadable (number) {




// Handle numbers from 10 to 99
if (number < 10) {
    return num[number];
}else if (number >= 10 && number < 20) {
    return tenNum[number];
}else if (number >= 20 && number < 100) {
    const tensPart = Math.floor(number / 10);
    const unitsPart = number % 10;
    return unitsPart === 0 ? tens[tensPart] : `${tens[tensPart]} ${num[unitsPart]}`;
}


// Handle numbers from 100 to 999
if (number >= 100 && number < 1000) {
    const hundredsPart = Math.floor(number / 100);
    const remainder = number % 100;
    
    if (remainder === 0) {
        return `${num[hundredsPart]} hundred`;
    } else {
        return `${num[hundredsPart]} hundred ${toReadable(remainder)}`;
    }
}

}
