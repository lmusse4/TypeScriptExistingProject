let billTotal: number = 50;

function calculateTip(amount: number): number {
  let tipAmount: number = amount * 0.2;
  return tipAmount;
}

function getBillTotal(amount: number): number {
  let tipAmount: number = calculateTip(billTotal);
  return amount + tipAmount;
}

console.log("Tip: $ " + calculateTip(billTotal));
console.log("Bill total with tip: $ " + getBillTotal(billTotal));
