document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("getMystery");
    const display = document.getElementById("mysteryDisplay");

    const riddles = [
        "Що має ключі, але не може відкрити жодні двері? (Клавіатура)",
        "Що завжди попереду, але ніколи не досягається? (Майбутнє)",
        "Що може наповнювати кімнату, але не займає місця? (Світло)"
    ];

    button.addEventListener("click", function() {
        let randomRiddle = riddles[Math.floor(Math.random() * riddles.length)];
        display.textContent = randomRiddle;
        display.style.opacity = "1";
    });
});