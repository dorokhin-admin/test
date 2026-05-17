import { initTimer } from "./timer.js";

initTimer(".timer", new Date("2026-05-31"));
const phoneInput = document.querySelector(".lead-form__input");

if (phoneInput) {
    phoneInput.addEventListener("focus", () => {
        if (!phoneInput.value) {
            phoneInput.value = "+7 ";
        }
    });
}
document.querySelector(".lead-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const button = event.currentTarget.querySelector(".lead-form__button");

    button.textContent = "Заявка отправлена";
    button.disabled = true;

    setTimeout(() => {
        if (window.jQuery && jQuery.fancybox) {
            jQuery.fancybox.close();
        }

        button.textContent = "Отправить";
        button.disabled = false;

        event.currentTarget.reset();
    }, 1300);
});