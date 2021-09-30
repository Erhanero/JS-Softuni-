function attachEventsListeners() {
    let inputDays = document.getElementById("days");
    let inputHours = document.getElementById("hours");
    let inputMinutes = document.getElementById("minutes");
    let inputSeconds = document.getElementById("seconds");

    let time = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,

    }

    document.getElementsByTagName("main")[0].addEventListener("click", solve);

    function solve(e) {
        if (e.target.value == "Convert") {
            let button = e.target;
            let currentInputField = e.target.parentNode.querySelector("input[type=text]");
            document.querySelectorAll("input[type=text]")
            let value = currentInputField.value;
            let unit = currentInputField.id;
            let convertTime = convert(Number(value), unit);

            inputDays.value = convertTime.days;
            inputHours.value = convertTime.hours;
            inputMinutes.value = convertTime.minutes;
            inputSeconds.value = convertTime.seconds


        }
    }
    function convert(value, unit) {
        let inDays = value / time[unit];
        return {
            days: inDays,
            hours: inDays * time.hours,
            minutes: inDays * time.minutes,
            seconds: inDays * time.seconds,
        }
    }

}