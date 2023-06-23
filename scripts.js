const ratingCard = document.querySelector(".form-rating-container");
const formResult = document.querySelector(".form-result-container");
const ratingResult = document.querySelector(".rating-result");
const ratingButtons = document.querySelectorAll('.rating-button');
let buttonSelected = 0;

const changeCard = () => {
    ratingResult.innerHTML = "You selected " + buttonSelected + " out of 5";
    ratingCard.classList.add("none");
    formResult.classList.remove("none");
}

function changeButtonSelected(number) {
    ratingButtons.forEach((button) => {
        button.classList.remove("button-active");
    });
    ratingButtons[number - 1].classList.add("button-active");
    buttonSelected = number;
    console.log(number)
}