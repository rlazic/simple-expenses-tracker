// Get DOM elements
const expenseForm = document.getElementById('expense-form');
const expenseInput = document.getElementById('expense-input');
const amountInput = document.getElementById('amount-input');
const expenseList = document.getElementById('expense-list');
const totalExpense = document.getElementById('total-expense');

// Initialize expense array
let expenses = [];

// Add expense to the list
function addExpense(e) {
  e.preventDefault();
  const description = expenseInput.value;
  const amount = parseFloat(amountInput.value);

  if (description.trim() === '' || isNaN(amount)) {
    return;
  }

  const expense = {
    description,
    amount
  };

  expenses.push(expense);
  expenseInput.value = '';
  amountInput.value = '';

  updateExpenseList();
}

// Event listener for adding expense
expenseForm.addEventListener('submit', addExpense);


// Update the expense list
function updateExpenseList() {
  expenseList.innerHTML = '';

  let total = 0;
  for (let i = 0; i < expenses.length; i++) {
    const { description, amount } = expenses[i];
    total += amount;

    const li = document.createElement('li');
    li.innerHTML = `${description} - $${amount}`;
    expenseList.appendChild(li);
  }

  totalExpense.textContent = `Total Expense: $${total.toFixed(2)}`;
}

