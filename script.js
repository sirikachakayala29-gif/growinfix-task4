const targetDate = new Date("January 1, 2027 00:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const message = document.getElementById("message");

const timer = setInterval(() => {

    const now = new Date().getTime();

    const distance = targetDate - now;

    if(distance < 0){

        clearInterval(timer);

        document.querySelector(".countdown").style.display = "none";

        message.innerHTML = "🎉 Event is Live! 🎉";

        return;
    }

    days.innerHTML =
    Math.floor(distance / (1000 * 60 * 60 * 24));

    hours.innerHTML =
    Math.floor((distance % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60));

    minutes.innerHTML =
    Math.floor((distance % (1000 * 60 * 60))
    / (1000 * 60));

    seconds.innerHTML =
    Math.floor((distance % (1000 * 60))
    / 1000);

},1000);