function toReadable(number) {

    function threeDigitsToString(digits) {
        let readable = oneDigitToString(Math.floor(digits/100)) + " " + "hundred";
        if (digits % 100 > 0) {
            readable +=  " " + twoDigitsToString(digits % 100);
        }
        return readable;
    }

    function twoDigitsToString(digits) {
        if (digits === 0) {
            return "";
        } else if (digits < 10) {
            return oneDigitToString(digits);
        } else if (digits < 20) {
            switch (digits) {
                case 10:
                    return "ten";
                    break;
                case 11: 
                    return "eleven";
                    break;
                case 12:
                    return "twelve";
                    break;
                case 13:
                    return "thirteen";
                    break;
                case 14:
                    return "fourteen";
                    break;
                case 15:
                    return "fifteen";
                    break;
                case 16:
                    return "sixteen";
                    break;
                case 17:
                    return "seventeen";
                    break;
                case 18:
                    return "eighteen";
                    break;
                case 19:
                    return "nineteen";
                    break;

            }
        } else if (digits % 10 === 0) {
            switch (digits) {
                case 20:
                    return "twenty";
                    break;
                case 30:
                    return "thirty";
                    break;
                case 40:
                    return "forty";
                    break;
                case 50:
                    return "fifty";
                    break;
                case 60:
                    return "sixty";
                    break;
                case 70:
                    return "seventy";
                    break;
                case 80:
                    return "eighty";
                    break;
                case 90:
                    return "ninety"
                    break;
            }
        } else {
            return twoDigitsToString(Math.floor(digits/10)*10) + " " + oneDigitToString(digits % 10);
        }
    }

    function oneDigitToString(digit) {
        switch (digit) {
            case 0:
                return "zero";
                break;
            case 1:
                return "one";
                break;
            case 2:
                return "two";
                break;
            case 3:
                return "three";
                break;
            case 4:
                return "four";
                break;
            case 5:
                return "five";
                break;
            case 6:
                return "six";
                break;
            case 7:
                return "seven";
                break;
            case 8:
                return "eight";
                break;
            case 9:
                return "nine";
                break;
        }
    }

    switch (number.toString().length) {
        case 1:
            return oneDigitToString(number);
            break;
        case 2:
            return twoDigitsToString(number);
            break;
        case 3:
            return threeDigitsToString(number);
            break;
    }
    return twoDigitsToString(number);
}

module.exports = toReadable;


console.log(toReadable(77));
console.log(toReadable(54));
console.log(toReadable(30));
console.log(toReadable(99));
console.log(toReadable(7));
console.log(toReadable(395));
console.log(toReadable(787));