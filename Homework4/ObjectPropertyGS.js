const bankAccount = {
    balance: 1000,

    get formattedBalance() {
        return `$${this.balance}`;
    },

    set _balance(newBalance) {
        this.balance = newBalance;
    },

    transfer: function(targetAccount, amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            targetAccount.balance += amount;
        } else {
            console.log("Your balance is not enough");
        }
    }
};

console.log(bankAccount.formattedBalance);

const anotherAccount = {
    balance: 500
};

console.log(anotherAccount.formattedBalance);

bankAccount.transfer(anotherAccount, 200);

console.log(bankAccount.formattedBalance);
console.log(anotherAccount.formattedBalance);
