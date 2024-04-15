class BankAccount{
        accNO = 1001
        wonName = "John Doe"
        #balance = 800

    deposit(amount){        
        this.#balance+=amount
        return amount
    }

    withdraw(amount){
       this.#balance-=amount
       return amount
    }

    getBalance(){
        return this.#balance;
    }

    displayAccountInfo(){
        console.log("Account Number: "+this.accNO)
        console.log("Owner Name: "+this.wonName)
        console.log("Balance "+this.getBalance())
    }
}

const acc = new BankAccount();
console.log("Deposited "+acc.deposit(200)+" into account "+acc.accNO)
console.log("Withdraw "+acc.withdraw(300)+" into account "+acc.accNO)
acc.displayAccountInfo()

