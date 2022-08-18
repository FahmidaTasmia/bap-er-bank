// add event handler 
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmmount = parseFloat(withdrawField.value);


    //get previous withdraw total

    const withdrawTotalElement =  document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);

    //step:4 [calculate total withdraw ammount]
    const currentWithdrawTotal = previousWithdrawTotal+ newWithdrawAmmount;

    //step:5 [total withdraw ammount]

    withdrawTotalElement.innerText = currentWithdrawTotal;



})