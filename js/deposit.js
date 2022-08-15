//step-1: add event listener to deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    //step-2:get the deposit amount from the deposit input field
    //for input field use .value to the inside the input the field 
    const depositField=document.getElementById('deposit-field');
    const newDepositAmountString=depositField.value;
    const newDepositAmount=parseFloat(newDepositAmountString);
    //step-3:get the current deposit total
    //for no-input (element other then input ,textarea )use innerText to get the text  
    const depositTotalElement=document.getElementById('deposit-total');
    const previousDepositTotalString=depositTotalElement.innerText;
    const previousDepositTotal=parseFloat(previousDepositTotalString);
    //step-4:add numbers to set the total deposit 
    const currentDepositTotal=newDepositAmount+previousDepositTotal;
   depositTotalElement.innerText=currentDepositTotal;
   //step-5:get balance current total
   const balanceTotalElement=document.getElementById('balance-total');
   const previousBalanceTotalString=balanceTotalElement.innerText;
   const previousBalanceTotal=parseFloat(previousBalanceTotalString);
   //step-6:calculate total balance
   const currentBalance=previousBalanceTotal+newDepositAmount;
   //set the balance total
   balanceTotalElement.innerText=currentBalance;
   //step-7:clear the deposit text
   depositField.value='';

})