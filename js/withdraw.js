// add event handler 
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmmount = parseFloat(withdrawField.value);
    withdrawField.value='';
    if(isNaN(newWithdrawAmmount)){
        alert('please provide a valid number');
        return;
    }
    


    //get previous withdraw total

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);



    //step:5 [total withdraw ammount]



    //get the privious balance total

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    //step-7 clear the input field

    withdrawField.value = ' ';
    if (newWithdrawAmmount > previousBalanceTotal) {
        alert('baper bank e eto tk nai');
        return;
    }
    //step:4 [calculate total withdraw ammount]
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    //calculate new balance total

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmmount;
    balanceTotal.innerText = newBalanceTotal;


})