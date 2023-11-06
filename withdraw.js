// event hadler with the withdraw
document.getElementById('btn-withdraw').addEventListener('click' , function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountSting = withdrawField.value;
    // also make sure to convert the input a number to parsefloat

        const newWithdrawAmount =parseFloat(newWithDrawAmountSting);
        withdrawField.value = '';

        if(isNaN(newWithdrawAmount)){
            alert("Please enter valid amount");
            return false;
        }
    
        const withdrawTotalElement = document.getElementById('withdraw-total');
        const previousWithdrawTotalSting = withdrawTotalElement.innerText;
        const previousWithdrawTotal = parseFloat(previousWithdrawTotalSting);
        
        // calculate total withdraw amount


       

        const balanceTotalElement = document.getElementById('balance-total');
        const previousBalanceTotalString = balanceTotalElement.innerText;
        const previousBalanceTotal = parseFloat(previousBalanceTotalString);

       

        if(newWithdrawAmount > previousBalanceTotal) {
            alert('Amount not withdraw');
            return false;
        }

        const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
        withdrawTotalElement.innerText = currentWithdrawTotal; 

        const newBalaceTotal = previousBalanceTotal - newWithdrawAmount;
        balanceTotalElement.innerText = newBalaceTotal ;
})
