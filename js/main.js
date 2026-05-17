import { initTimer } from "./timer.js";

initTimer(".timer", new Date("2026-05-31"));
const phoneInput = document.querySelector(".lead-form__input");

if (phoneInput) {
    const formatPhone = () => {
        const digits = phoneInput.value.replace(/\D/g, "");
        const localDigits = digits.startsWith("7") || digits.startsWith("8")
            ? digits.slice(1, 11)
            : digits.slice(0, 10);

        let value = "+7";

        if (localDigits.length > 0) {
            value += ` (${localDigits.slice(0, 3)}`;
        }

        if (localDigits.length >= 3) {
            value += ")";
        }

        if (localDigits.length > 3) {
            value += ` ${localDigits.slice(3, 6)}`;
        }

        if (localDigits.length > 6) {
            value += `-${localDigits.slice(6, 8)}`;
        }

        if (localDigits.length > 8) {
            value += `-${localDigits.slice(8, 10)}`;
        }

        phoneInput.value = value;
    };

    phoneInput.addEventListener("focus", () => {
        if (!phoneInput.value) {
            phoneInput.value = "+7 (";
        }
    });

    phoneInput.addEventListener("input", formatPhone);

    phoneInput.addEventListener("keydown", (event) => {
        const allowedKeys = [
            "Backspace",
            "Delete",
            "Tab",
            "Escape",
            "Enter",
            "ArrowLeft",
            "ArrowRight",
            "Home",
            "End",
        ];

        if (
            allowedKeys.includes(event.key) ||
            event.ctrlKey ||
            event.metaKey ||
            /^\d$/.test(event.key)
        ) {
            return;
        }

        event.preventDefault();
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

        if (phoneInput) {
            phoneInput.value = "+7 (";
        }
    }, 1300);
});
