let balance = 1000;

function deposit() {
    let amount = parseFloat(document.getElementById("amount").value);
    let message = document.getElementById("message");

    if (!isNaN(amount) && amount > 0) {
        balance += amount;
        document.getElementById("balance").textContent = balance;
        message.style.color = "green";
        message.textContent = `Successfully deposited $${amount}.`;
    } else {
        message.style.color = "red";
        message.textContent = "Invalid deposit amount.";
    }
    document.getElementById("amount").value = "";
}

function withdraw() {
    let amount = parseFloat(document.getElementById("amount").value);
    let message = document.getElementById("message");

    if (!isNaN(amount) && amount > 0) {
        if (amount <= balance) {
            balance -= amount;
            document.getElementById("balance").textContent = balance;
            message.style.color = "green";
            message.textContent = `Successfully withdrew $${amount}.`;
        } else {
            message.style.color = "red";
            message.textContent = "Insufficient balance.";
        }
    } else {
        message.style.color = "red";
        message.textContent = "Invalid withdrawal amount.";
    }
    document.getElementById("amount").value = "";
}
