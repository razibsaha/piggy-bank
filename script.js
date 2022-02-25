document.getElementById('calculate').addEventListener('click', function() {
    // withdraw amount

    const incomeInput = document.getElementById('income-input');
    const incomeText = incomeInput.value;
    const incomeAmount = parseFloat(incomeText);
    
    const foodInput = document.getElementById('food-input');
    const foodText = foodInput.value;
    const foodAmount = parseFloat(foodText);

    const rentInput = document.getElementById('rent-input');
    const rentText = rentInput.value;
    const rentAmount = parseFloat(rentText);

    const clothesInput = document.getElementById('clothes-input');
    const clothesText = clothesInput.value;
    const clothesAmount = parseFloat(clothesText);

   


    

    // const previousWithdrawText = withdrawTotal.innerText;
    // const previousWithdrawAmount = parseFloat(previousWithdrawText);
    // const newWithdrawTotal = incomeAmount - (foodAmount+rentAmount+clothesAmount) 
    // withdrawTotal.innerText = newWithdrawTotal;

    //clear

    // withdrawInput.value = '';

    // Update accounat balance
    

    const totalExpense = document.getElementById('total-expenses');
    // depositTotal.innerText = depositAmount;

    const previousTotalExpenseText = totalExpense.value;
    const previousTotalExpenseAmount = parseFloat(previousTotalExpenseText);
    const newTotalExpense = foodAmount+rentAmount+clothesAmount;

    totalExpense.innerText = newTotalExpense;
    
    const newBalance = document.getElementById('balance');
    
    const newBalanceAfterExpenses = incomeAmount - (foodAmount+rentAmount+clothesAmount);

    newBalance.innerText = newBalanceAfterExpenses;

    
    
    
    const typedNumbers = document.getElementById('failed').innerText;
    
    if (incomeText != 'number'){
        typedNumbers.style.display = 'block';

    } else if(input == 'number'){
            typedNumbers.style.display = 'hidden';
    }
    
})