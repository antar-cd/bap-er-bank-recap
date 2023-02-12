//1: add event listener to the deposit button
// 2. get deposit amount from the deposit input field 
//2.5- convert string deposit amount to a number type
//3- 


//step-1:
document.getElementById('btn-deposit').addEventListener('click',function(){
    //step-2: 
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString =depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
   // console.log(newDepositAmount)

   //step-4
   const depositTotalElement= document.getElementById('deposit-total');
   const prevDepositeTotalString= depositTotalElement.innerText;
   const prevDepositeTotal= parseFloat(prevDepositeTotalString);

    //step-5
    const newDeposittotal =prevDepositeTotal + newDepositAmount;
    depositTotalElement.innerText=newDeposittotal;


//step-6
    const balanceTotalElement= document.getElementById('balance-total');
    const previousBalanceTotalString= balanceTotalElement.innerText;
    const previousBalanceTotalamount=parseFloat (previousBalanceTotalString);
    

    //step-7:
    const newBalanceTotal = previousBalanceTotalamount + newDepositAmount;
    balanceTotalElement.innerText= newBalanceTotal
    depositField.value= ''; //clear the input field after geting the value
})