//Calculate Tip
function calculateTip() {
  var billAmt = document.getElementById("bill-amt").value;
  var serviceQual = document.getElementById("serviceQual").value;
  var numberOfPeople = document.getElementById("people-amt").value;

  //Validate input
  if (billAmt === "" || serviceQual == 0) {
    alert("Please enter values");
    return;
  }

  //Check to see if this input is empty or less than or equal to 1
  if (numberOfPeople === "" || numberOfPeople <= 1) {
    numberOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  // Calculate Tip
  var total = (billAmt * serviceQual) / numberOfPeople;

  //Round to two decimal places
  total = Math.round(total * 100) / 100;

  //Allowance for two digit after decimal point
  total = total.toFixed(2);

  //Display Tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//Click to call function
document.getElementById("calculate").onclick = function() {
  calculateTip();
};
