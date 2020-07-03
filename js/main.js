function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    if (amountNumber > 10) {
        alert("Maximum 10 db terméket vásárolhat!")
    } else if (amountNumber < 1) {
        alert("Minimum 1 db terméket kell vásárolnia!");
    } else {
        let amount = parseInt(amountInput.value) * price;
        showAmount.innerHTML = amount;
    }

}

function validateEmail(inputText) {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let emailInput = document.querySelector("input[name='email-input']");

    if (emailInput.value.match(mailformat)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)

}