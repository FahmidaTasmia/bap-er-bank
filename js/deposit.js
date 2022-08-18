//step-1[add event listeer to diposit button]
document.getElementById('btn-deposit').addEventListener('click', function(){
    //step-2 get the deposit amount from the deposit input field
const dipositField = document.getElementById('deposit-field');
//for input field use.value to the value inside the input field
const newDipositAmmountString = dipositField.value;
const newDipositAmmount = parseFloat(newDipositAmmountString);
//step-3 [get the deposit total]
const depositTotalElement = document.getElementById('deposit-total');
//for non input [element other than input,textarea] use innertext to get text.
const previousdepositTotal = parseFloat(depositTotalElement.innerText);
//step-4[add numbers to set the total deposit]

const currentDepositTotal = previousdepositTotal + newDipositAmmount;
depositTotalElement.innerText= currentDepositTotal;

//step-5 [get balance current total]
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotal = parseInt (balanceTotalElement.innerText);

//step-6[current total balance]
const currentBalanceToatal = previousBalanceTotal+newDipositAmmount;

//set the balance total
balanceTotalElement.innerText = currentBalanceToatal;

//step-7 clear the deposit field
dipositField.value = '';
})