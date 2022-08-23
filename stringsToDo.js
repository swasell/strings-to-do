// removeBlanks("Pl ayTha tF u nkyM usic") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"

function removeBlanks(str){
    let blanks = " "
    for(let i = 0; i < str.length; i++) {
        if(str[i] != " ") {
            blanks += str[i]
        }
    }
    return blanks
}
console.log(removeBlanks("Pl ayTha tF u nkyM usic"));
console.log(removeBlanks("I can not BELIEVE it's not BUTTER"));



// getDigits("abc8c0d1ngd0j0!8") => 801008
// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680

function getDigits(str) {
    let digits = " "
    for(let char in str) {
        if(!isNaN(str[char])){
            digits += str[char]
        }
    }
    return Number(digits)
}
console.log(getDigits("abc8c0d1ngd0j0!8"));
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));



// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 
// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".

function acronym(str) {
    let letters = str.split(" ")
    let newStr = " "
    for(let word in letters) {
        if(letters[word].length > 0) {
        newStr += letters[word][0].toUpperCase()
        }
    }
    return newStr
}
console.log(acronym(" there's no free lunch - gotta pay yer way. "));
console.log(acronym("Live from New York, it's Saturday Night!"));



// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11

function countNonSpaces(str) {
    let count = 0
    for(let char in str) {
        if(str[char] != " ") {
            count++
        }
    }
    return count
}
console.log(countNonSpaces("Honey pie, you are driving me crazy"));
console.log(countNonSpaces("Hello world !"));



// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']

function removeShorterStrings(arr, len) {
    let strings = []
    let index = []
    for(let value in arr) {
        if(arr[value].length >= len) {
            strings[index++] = arr[value]
        }
    }
    return strings
}
console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4));
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3));

