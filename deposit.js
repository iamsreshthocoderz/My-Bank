document.getElementById('btn-deposit').addEventListener('click' , function(){
    // get the amount from the deposit field
    const depositField =document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

// clear the deposit field 
depositField.value = '';

    if (isNaN(newDepositAmount)) {
        alert("Please enter a valid number for the deposit amount.");
        return; // Stop further execution
    }
    

    // get the deposit total
    // non input textarea inner text
    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotalSting = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalSting);
    // add number set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;




    // get the balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // calculate total
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;


    
})



