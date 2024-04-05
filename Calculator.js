String.prototype.plus = function(num) {
    let result = "";
    let carry = 0;
    let i = this.length - 1;
    let j = num.length - 1;

    while (i >= 0 || j >= 0 || carry) {
        let digitSum = carry;
        if (i >= 0) {
            digitSum += parseInt(this[i]);
            i--;
        }
        if (j >= 0) {
            digitSum += parseInt(num[j]);
            j--;
        }
        carry = Math.floor(digitSum / 10);
        digitSum %= 10;
        result = digitSum.toString() + result;
    }

    return result;
}

String.prototype.minus = function(num) {
    let result = "";
    let borrow = 0;
    let i = this.length - 1;
    let j = num.length - 1;

    while (i >= 0) {
        let digitDiff = borrow;
        if (j >= 0) {
            digitDiff += parseInt(this[i]) - parseInt(num[j]);
            j--;
        } else {
            digitDiff += parseInt(this[i]);
        }
        if (digitDiff < 0) {
            borrow = -1;
            digitDiff += 10;
        } else {
            borrow = 0;
        }
        result = digitDiff.toString() + result;
        i--;
    }

    return result.replace(/^0+/, "");
}

String.prototype.divide = function(num) {
    let dividend = parseInt(this);
    let divisor = parseInt(num);
    let i = 0;

    while (dividend >= divisor) {
        dividend -= divisor;
        i++;
    }

    return i.toString();
}

String.prototype.multiply = function(num) {
    return (parseInt(this) * parseInt(num)).toString();
}

let bigNum1 = "4093975647547595768675765456458654976575687976";
let bigNum2 = "4082643465458756796788887876876685785678565945";

let num1 = "4231";
let num2 = "3754";

let res = bigNum1.plus(bigNum2);
console.log(res);

let res2 = num1.minus(num2);
console.log(res2)

let res3 = bigNum1.divide(bigNum2);
console.log(res3)

let res4 = num1.multiply(num2);
console.log(res4)