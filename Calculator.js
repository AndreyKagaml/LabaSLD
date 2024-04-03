

let bigNum1 = "4093975647547595768675765456458654976575687976";
let bigNum2 = "4082643465458756796788887876876685785678565945";

let num1 = "4231";
let num2 = "3754";

let res = plus(bigNum1, bigNum2);
console.log(res);

let res2 = minus(num1, num2);
console.log(res2)

let res3 = divide(bigNum1, bigNum2);
console.log(res3)

let res4 = multiply(num1, num2);
console.log(res4)

function plus(num1, num2) {
    let result = "";
    let carry = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;

    while (i >= 0 || j >= 0 || carry) {
        let digitSum = carry;
        if (i >= 0) {
            digitSum += parseInt(num1[i]);
            i--;
        }
        if (j >= 0) {
            digitSum += parseInt(num2[j]);
            j--;
        }
        carry = Math.floor(digitSum / 10);
        digitSum %= 10;
        result = digitSum.toString() + result;
    }

    return result;
}

function minus(num1, num2) {
    let result = "";
    let borrow = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;

    while (i >= 0) {
        let digitDiff = borrow;
        if (j >= 0) {
            digitDiff += parseInt(num1[i]) - parseInt(num2[j]);
            j--;
        } else {
            digitDiff += parseInt(num1[i]);
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

function divide(num1, num2) {
    let dividend = parseInt(num1);
    let divisor = parseInt(num2);
    let i = 0;

    while (dividend >= divisor) {
        dividend -= divisor;
        i++;
    }

    return i.toString();
}

function multiply(num1, num2) {
    return (parseInt(num1) * parseInt(num2)).toString();
}
