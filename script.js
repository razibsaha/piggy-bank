document.getElementById("calculate").addEventListener("click", function () {
  //Getting the value of Income input
  const incomeInput = document.getElementById("income-input");
  const incomeValue = incomeInput.value;
  const incomeAmount = parseFloat(incomeValue);

  //Getting the value of Food input
  const foodInput = document.getElementById("food-input");
  const foodValue = foodInput.value;
  const foodAmount = parseFloat(foodValue);

  //Getting the value of Rent input
  const rentInput = document.getElementById("rent-input");
  const rentValue = rentInput.value;
  const rentAmount = parseFloat(rentValue);

  //Getting the value of Clothes input
  const clothesInput = document.getElementById("clothes-input");
  const clothesText = clothesInput.value;
  const clothesAmount = parseFloat(clothesText);

  //Linking with the div id to show total expense
  const totalExpense = document.getElementById("total-expenses");

  const newTotalExpense = foodAmount + rentAmount + clothesAmount;
  console.log(newTotalExpense);

  totalExpense.innerText = newTotalExpense;

  const newBalance = document.getElementById("rem-balance");
  const newBalanceAfterExpenses =
    incomeAmount - (foodAmount + rentAmount + clothesAmount);

  newBalance.innerText = newBalanceAfterExpenses;

  const typedNumbers = document.getElementById("failed").innerText;

  if (incomeValue != "number") {
    typedNumbers.style.display = "block";
  } else if (input == "number") {
    typedNumbers.style.display = "hidden";
  }
});

document.getElementById("savings").addEventListener("click", function () {
  const incomeInput = document.getElementById("income-input");
  const incomeValue = incomeInput.value;
  const incomeAmount = parseFloat(incomeValue);


  const savingsInput = document.getElementById("save-input");
  const saveValue = savingsInput.value;
  const saveAmount = parseFloat(saveValue);

  const savingAmount = saveAmount * (incomeAmount / 100);
  const getSavingAmount = document.getElementById("saving-amount");
  getSavingAmount.innerHTML = savingAmount.toFixed(2);

  const remainingBalance = document.getElementById('remaining-amount')
  const remainingAmount = incomeAmount - savingAmount;
  remainingBalance.innerHTML = remainingAmount.toFixed(2);
});
