// Functions

// Minimum - Return the smaller number out of two arguments

function min(a,b) {
    if (a > b) {
        return b
    }
    else if (a < b){
        return a
    }
    else {
        return a
    }
}

// Recursion

function isEven(number) {
    if (number == 0){
        return true
    }
    else if (number == 1){
        return false
    }
    else if ( number < 0) {
        number = number * (-1)
        return isEven(number)
    }
    else {
        number = number - 2; 
        return isEven(number);
    }
}

// Bean Counting - (Case Sensitive)

function countLetters(string, letter){
    counter = 0
    numOfLetter = 0
    while(counter <= (string.length - 1)){
        if (string.charAt(counter) === letter) {
            numOfLetter += 1;
        }
        counter += 1;
    }
    return numOfLetter;
}

console.log(countLetters("ErindaleE", "E"));