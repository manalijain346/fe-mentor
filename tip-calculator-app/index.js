let bill = document.getElementById("bill");
let people = document.getElementById("people");
let tip = document.getElementsByClassName("tip");
let reset = document.getElementById("reset");
let tipLabel = document.getElementById("tip-amount");
let amountLabel = document.getElementById("total");
let billValue = 0;
let noOfPeople = 0;
let tipValue = 0;
bill.addEventListener("keyup", billAmount);

function billAmount() {
    billValue = bill.value;
    if (billValue === "0") {
        alert("Can't be zero.");
    } else {
        calculationResult();
    }
}

people.addEventListener("keyup", setPeople);

function setPeople() {
    noOfPeople = people.value;
    if (noOfPeople === "0") {
        alert("Can't be zero.");
    } else {
        calculationResult();
    }
}


function calculationResult() {
    let amountPerPerson = billValue;
    let tipPerPerson = 0;
    if (noOfPeople > 0) {
        if (tipValue > 0) {
            tipPerPerson = tipValue / noOfPeople;
            tipLabel.textContent = tipPerPerson.toFixed(2);
        }
        amountPerPerson = (Number.parseFloat(billValue) + Number.parseFloat(tipValue)) / noOfPeople;
    }
    amountLabel.textContent = Number.parseFloat(amountPerPerson).toFixed(2);
}

function setTipAndCalculate(tipPercent) {
    tipValue = 0;
    if (billValue > 0) {
        tipValue = billValue * tipPercent;
        calculationResult();
    }
}

function resetView() {
    people.value = 0;
    bill.value = 0;
    tip.value = 0;
    tipLabel.textContent = 0.00;
    amountLabel.textContent = 0.00;
    billValue = 0;
    noOfPeople = 0;
    tipValue = 0;
}