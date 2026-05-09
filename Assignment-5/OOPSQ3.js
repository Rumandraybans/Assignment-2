class BankAccount {
  #balance;

  constructor(accountNumber, accountHolderName, initialBalance) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log("Deposit amount must be greater than zero.");
    } else {
      this.#balance = this.#balance + amount;
      console.log("Amount Deposited: " + amount);
      console.log("Account Number: " + this.accountNumber);
      console.log("Account Holder Name: " + this.accountHolderName);
      console.log("Balance: " + this.#balance);
    }
  }

  withdraw(amount) {
    if (amount <= 0) {
      console.log("Withdrawal amount must be greater than zero.");
    } else if (amount > this.#balance) {
      console.log("Insufficient Balance! Withdrawal Failed.");
      console.log("Account Number: " + this.accountNumber);
      console.log("Account Holder Name: " + this.accountHolderName);
      console.log("Available Balance: " + this.#balance);
    } else {
      this.#balance = this.#balance - amount;
      console.log("Amount Withdrawn: " + amount);
      console.log("Account Number: " + this.accountNumber);
      console.log("Account Holder Name: " + this.accountHolderName);
      console.log("Balance: " + this.#balance);
    }
  }

  
  getBalance() {
    console.log("Account Number: " + this.accountNumber);
    console.log("Account Holder Name: " + this.accountHolderName);
    console.log("Balance: " + this.#balance);
  }
}

let account = new BankAccount(978845, "Vishal Sharma", 5000);

console.log("Initial Balance");
account.getBalance();

console.log("Depositing 3000 ");
account.deposit(3000);

console.log("Withdrawing 2000");
account.withdraw(2000);

console.log("Withdrawing 10000");
account.withdraw(10000);

console.log("Final Balance");
account.getBalance();
console.log("-------------------------")