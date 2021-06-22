const Account = require('./bankaccount');

test('deposit adds money to the balance', () => {
let account = new Account("deposit_test")
account.deposit(100)
expect(account.getBalance()).toBe(100);
});

test('withdraw takes money from the balance', () => {
	let account = new Account("deposit_test")
	account.deposit(100)
	account.withdraw(50)
	expect(account.getBalance()).toBe(50);
	});

test('withdraw takes money from the balance', () => {
	let account = new Account("deposit_test")
	account.deposit(100)
	account.withdraw(50)
	account.deposit(100)
	account.deposit(100)
	account.deposit(100)
	account.getStatement()
	});