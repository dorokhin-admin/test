document.querySelectorAll(".card").forEach((card) => {
    const carImg = card.querySelector(".car-img");
    const colorBtns = card.querySelectorAll(".colors__item");

    colorBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const newSrc = btn.dataset.img;
            if (!newSrc) return;

            carImg.src = newSrc;

            colorBtns.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
        });
    });
});