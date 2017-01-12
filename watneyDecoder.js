'use strict';
// takes an encoded array of hex values
function decode(str) {
    // console.log(str);
    let decodedStr = '';
    // // loops through the array and converts hex to ascii
    for (var i = 0; i < str.length; i += 3) {
        decodedStr += (String.fromCharCode(parseInt(str.substr(i, 2), 16)));
        // console.log(i);
    }
    // console.log(decodedStr);

    // returns a string
    return decodedStr;
}

function encode(str) {
    let hex = [];
    for (var i = 0; i < str.length; i++) {
        // let character = str[i];
        hex.push(str[i].charCodeAt(0).toString(16));
    }
    // charCodeAt(0).toString(16)
    hex = hex.join(',');
    // console.log(hex);
    return hex;
}

function encodeArc(str) {
    let encodedStr = encode(str);
    let arc = 22.5;
    let charList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    let decodedStr = [];
    let arcIndex = 0;

    encodedStr = encodedStr.replace(/[, ]/g, '');

    // loop through the string of characters
    for (var i = 0; i < encodedStr.length; i++) {
        for (var j = 0; j < charList.length; j++) {
            // find the matching character in the charList
            if (encodedStr[i] == charList[j]) {
                // the index of the ascii char to use
                arcIndex = j;
                // console.log(charList[j], encodedStr[i])
                let thisArc = j * arc;
                decodedStr.push(thisArc);
            }
        }
    }
    decodedStr = decodedStr.join(',');
    // console.log(decodedStr);
    return decodedStr;
}
// encode('apple');
// decode(encode('apple'));
// encodeArc('I admit it\'s fatally dangerous, but I\'d get to fly around like Iron Man.');

module.exports = {
    decode,
    encode,
    encodeArc
}