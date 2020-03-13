const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result='';
    let subStr='';
    let morseStr='';
    let decryptStr='';
    for(let i=10; i<=expr.length;i+=10){
        subStr=expr.substring(i-10,i);
        for(let j=2;j<=subStr.length;j+=2){
            morseStr=subStr.substring(j-2,j);
            if(morseStr=='10'){
                result+='.';
            }else if(morseStr=='11'){
                result+='-';
            }else if(morseStr=='**'){
                result+='**'
            }else{
                result='';
            }
        }
        decryptStr+=comparison(result);
        result='';
    }
    return decryptStr;
}

function comparison (str) {
    for (var key in MORSE_TABLE) {
        if(str=='**********'){
            return ' ';
        }
        if(key==str){
            return MORSE_TABLE[key];
        }
    }
}

module.exports = {
    decode
}