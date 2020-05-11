const randomString = 'aslkdfjsadf3h3f23h3fhdslkafjasdf';

function countLetter(needleLetter, haystackStr) {
    const letters = haystackStr.split('');
    const lettersMatchingSearch = letters.filter(function (letter) {
        return letter === needleLetter;
    });
    return lettersMatchingSearch.length;
}


const countA = countLetter("a", randomString);
console.log('countA', countA);

//function callIn5Sec(cb) {
    //window.setTimeout(cb, 3000);
//}


//function sayTravis() {
    //console.log('Travis');
//}

//callIn5Sec(sayTravis);

