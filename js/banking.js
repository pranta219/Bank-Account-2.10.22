// add deposit balance
document.getElementById('deposit-btn').addEventListener('click', function () {
    // get the amount deposit
    const depositInput = document.getElementById('deposit-input');

    const newDepositAmountText = depositInput.value;

    const newDepositAmount = parseFloat(newDepositAmountText)

    const totalDeposit = document.getElementById('total-deposit');

    const currentAmountText = totalDeposit.innerText;

    const currentAmount = parseFloat(currentAmountText);

    const newAmount = currentAmount + newDepositAmount;

    totalDeposit.innerText = newAmount;

    // update balance
    const balanceTotla = document.getElementById('update-balance');

    const balanceTotlaTaxt = balanceTotla.innerText;

    const currentBalanceTotal = parseFloat(balanceTotlaTaxt);

    const newBalanceTotal = currentBalanceTotal + newDepositAmount;

    balanceTotla.innerText = newBalanceTotal;

    // clear the deposit input field
    depositInput.value = '';

});


// Withdraw balance
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');

    const withdrawAmountText = withdrawInput.value;

    const newWithdrawAmount = parseFloat(withdrawAmountText);

    // console.log(newWithdrawAmount);

    // set withdraw amount
    const withdrawTotal = document.getElementById('withdraw-total');

    const currentWithdrawText = withdrawTotal.innerText;

    const currentWithdrawTotal = parseFloat(currentWithdrawText);

    const newWithdrawTotal = currentWithdrawTotal + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balanceTotla = document.getElementById('update-balance');

    const currentBalanceText = balanceTotla.innerText;

    const currentBalanceTotal = parseFloat(currentBalanceText);

    const newBalanceTotal = currentBalanceTotal - newWithdrawAmount;

    balanceTotla.innerText = newBalanceTotal;

    // clear input field
    withdrawInput.value = '';

})