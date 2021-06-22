class Account {
	constructor(name) {
		this.name = name;
		this.balance = 0;
		this.transactions = [];
	}
	getBalance() {
		return this.balance
	}
	deposit(amount) {
		const newBalance = this.balance + amount
		this.addTransaction(amount, newBalance)
	}
	withdraw(amount) {
		const newBalance = this.balance - amount
		this.addTransaction(-amount, newBalance)
	}
	addTransaction(amount, newBalance) {
		const t = {date: Date.now(), amount: amount, balance: newBalance}
		this.balance = newBalance
		this.transactions.push(t)
	}
	getStatement(){
		console.log("Date || Amount || Balance")
		this.transactions.forEach(t => (console.log(`${t.date} || ${t.amount} || ${t.balance}`)))
	}
  }




  module.exports = Account;