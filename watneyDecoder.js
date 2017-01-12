'use strict';
function decode(str){

}

function encode(str){
  let hex = [];
  for (var i = 0; i < str.length; i++) {
    // let character = str[i];
    hex.push(str[i].charCodeAt(0).toString(16));
  }
 // charCodeAt(0).toString(16)
 console.log(hex);
}

function encodeArc(str) {

}
encode('apple');

module.exports = {decode,encode,encodeArc}
