const messages = [
    "Seguro?",
    "Muy seguro??",
    "Estas 100% seguro?",
    "Porfa di que si",
    "Piensalo otra vez",
    "Si dices que no gomito",
    "Gomito yaaa",
    "Voy a estar muy muy muy malito",
    "Supongo que ya no me quieres :C",
    "DI QUE SI YAAAAAAAAA"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}