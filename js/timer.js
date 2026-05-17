export function initTimer(selector, endDate) {
    const saleEnd = new Date(endDate);

    const pad = (value) => String(value).padStart(2, "0");

    function updateTimer() {
        const diff = Math.max(0, saleEnd.getTime() - Date.now());

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        document.getElementById("days").textContent = pad(days);
        document.getElementById("hours").textContent = pad(hours);
        document.getElementById("minutes").textContent = pad(minutes);
        document.getElementById("seconds").textContent = pad(seconds);
    }

    updateTimer();
    setInterval(updateTimer, 1000);
}