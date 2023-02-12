document.getElementById('btn-withdraw').addEventListener('click',function(){
    
    const withdrawField = document.getElementById('withdraw-field');
    const withDrawAmountString = withdrawField.value;
     const withDrawAmount = parseFloat(withDrawAmountString);
     //console.log(withDrawAmount);

     const withDrawTotalElement= document.getElementById('withdraw-total');
     const previousWithdrawString= withDrawTotalElement.innerText;
     const previousWithdraw = parseFloat(previousWithdrawString);
     //console.log(previousWithdraw);
    //step-5: 

     const withdrawTotal= previousWithdraw + withDrawAmount;
     withDrawTotalElement.innerText= withdrawTotal;
    //step-6:

    const balanceElement= document.getElementById('balance-total');
    const previousBalanceTotalString= balanceElement.innerText;
    const prevDepositeTotal =parseFloat(previousBalanceTotalString);

        //step-7:

    const newBalanceTotal= prevDepositeTotal - withDrawAmount;
    balanceElement.innerText= newBalanceTotal;
     withdrawField.value ='';
     //const withDrawTotalElement=document.getElementById('withdraw-total');
     
})