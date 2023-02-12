document.getElementById('btn-withdraw').addEventListener('click',function(){
    
    const withdrawField = document.getElementById('withdraw-field');
    const withDrawAmountString = withdrawField.value;
     const withDrawAmount = parseFloat(withDrawAmountString);
     //console.log(withDrawAmount);

     const withDrawTotalElement= document.getElementById('withdraw-total');
     const previousWithdrawString= withDrawTotalElement.innerText;
     const previousWithdraw = parseFloat(previousWithdrawString);
     //console.log(previousWithdraw);

     const withdrawTotal= previousWithdraw + withDrawAmount;
     withDrawTotalElement.innerText= withdrawTotal;


     withdrawField.value ='';
     //const withDrawTotalElement=document.getElementById('withdraw-total');
     
})