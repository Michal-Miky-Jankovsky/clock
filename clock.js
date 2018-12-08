function countdown(endDate) {
    var hours = 0, minutes = 0;
    var _hours = 0, _minutes=0;

    var startDate = new Date().getTime();

    calculate();
    setInterval(calculate, 1000);

    function calculate() {

        var secondsFromStart = parseInt((new Date().getTime() - startDate) / 1000);

        hours = parseInt(secondsFromStart / 3600);
        secondsFromStart = (secondsFromStart % 3600);

        minutes = parseInt(secondsFromStart / 60);

        if (hours !== _hours) document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
        if (minutes !== _minutes) document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);

        _hours = hours;
        _minutes = minutes;
    }
}

(function () {
    countdown();
}());
