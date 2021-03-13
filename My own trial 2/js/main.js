function calcAmount() {
    let price = 1500;
    let amountInput = document.querySelector("input[name ='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amountNumber = parseInt(amountInput.value)
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    if (amountNumber > 10) { alert("Maximum 10 terméket vásárolhat") }
    else if (amountNumber < 1) { alert("Minimum egy terméket ki kell választani") }
    else {


        let amount = price * amountNumber;

        showAmount.innerHTML = amount;

    }

}