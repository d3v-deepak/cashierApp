var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var returnBtn = document.querySelector("#return-btn");
var errorMeassage = document.querySelector(".error-message");
var availbaleNotes = [2000, 500, 100, 20, 10, 5, 1];
var noOFNotes = document.querySelectorAll(".no-of-notes");
function calculateNotes(amount) {
  if (amount != 0) {
    for (let i = 0; i < availbaleNotes.length; i++) {
      var numberOfNotes = Math.trunc(amount / availbaleNotes[i]);
      amount = amount % availbaleNotes[i];
      noOFNotes[i].innerHTML = numberOfNotes;
    }
  } else {
    showErrorMessage("cash given is equal to bill amount");
  }
}

function calculateChange() {
  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      showErrorMessage("");
      var amountToReurn = cashGiven.value - billAmount.value;
      calculateNotes(Number(amountToReurn));
    } else {
      showErrorMessage(
        " cash collected should be more than or equal to bill amount"
      );
    }
  } else {
    showErrorMessage("bill should be greater than 0");
  }
}
function showErrorMessage(message) {
  errorMeassage.innerHTML = message;
}

returnBtn.addEventListener("click", calculateChange);
