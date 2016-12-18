const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bankAccountBalance = 300.00;
var amount = 0;

function calculateTotal () {
  amount = amount + PHONE_PRICE + (PHONE_PRICE * TAX_RATE) + ACCESSORY_PRICE + (ACCESSORY_PRICE * TAX_RATE);
}

function updateAccountBalance() {
  bankAccountBalance = bankAccountBalance - amount;
}
while (amount < bankAccountBalance) {
  calculateTotal();
  updateAccountBalance();
}



function formatAmount() {
  console.log("$"+amount.toFixed(2));
}

function formatAccountBalance() {
  console.log("$"+bankAccountBalance.toFixed(2));
}

formatAmount();
formatAccountBalance();

console.log(amount);
console.log(bankAccountBalance);

/* get price for phone + accessory with tax
 compare to account balance
 Add nother phone i
 */
