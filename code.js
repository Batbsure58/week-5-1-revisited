//start button function
function start() {
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}
//stop button function
function stop() {
    clearInterval(timer);
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}

//dom required
function getData() {
    var loadedData = loadData();
    return loadedData;
}

//dom required
function dataRow(legend, value, units) {
msg = "<td>";
msg += legend;
msg += "; </td><td>";
msg += value;
msg += " " + units;
msg += "</td>";
return msg;

}






function countDownV2() {
    var count = 10;

    for (var i = 1; i <= 10; i++) {
        setTimeout(function () {
            document.getElementById("countDownTimer").innerHTML = count;
            count--;
        }, 1000 * i);

    }
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = "Blastoff!!";
        count--;
    }, 11000);
}




//creating a countdown function to count from 10 to 1 then blast off
function countDown() {
    var count = 10;
    //starting count at 10
    document.getElementById("countDownTimer").innerHTML = count;
    count = count - 1;

    //then going to 9
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 1000);

    //then 8
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 2000);

    //then 7
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 3000);

    //then 6
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 4000);

    //then 5
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 5000);

    //then 4
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 6000);

    //then 3
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 7000);

    //then 2
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 8000);

    //then 1 
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 9000);

    //blastoff!!
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = "Blastoff!!";
        count = count - 1;
    }, 10000);
}

function playcraps() {
    //create die1 varible
    var die1;
    //create die2 varible
    var die2;
    // create sum 
    var sum;
    //make sure number are correct by 6 to get whole number with the math ceil
    die1 = Math.ceil(Math.random() * 6);
    die2 = Math.ceil(Math.random() * 6);
    sum = die1 + die2;
    //prints results for each of the result includeing the sum
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    document.getElementById("sumRes").innerHTML = sum;

    //lose or win sequence
    if (sum == 7 || sum == 11) {
        document.getElementById("crapsResults").innerHTML = "Craps!! You Lose.";
    } else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("crapsResults").innerHTML = "Doubles, You Win.";
    } else {
        document.getElementById("crapsResults").innerHTML = "Push. Please Try Again.";
    }
}

function runSandbox() {
    var count = 10;

    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            document.getElementById("sandboxDisplay").innerHTML = count;
            count--;
        }, 1000 * i);

    }
    setTimeout(function () {
        document.getElementById("sandboxDisplay").innerHTML = "Blastoff!!";
        count--;
    }, 11000);
}


class InputData {
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpsensor_altitude,
        bmpsensor_pressure,
        bmpsensor_temp,
        digsensor_temp,
        csssensor_temp,
        csssensor_eco2,
        csssensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ

    ) {
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpsensor_altitude = bmpsensor_altitude;
        this.bmpsensor_pressure = bmpsensor_pressure;
        this.bmpsensor_temp = bmpsensor_temp;
        this.digsensor_temp = digsensor_temp;
        this.csssensor_temp = csssensor_temp;
        this.csssensor_eco2 = csssensor_eco2;
        this.csssensor_TVOC = csssensor_TVOC;
        this.UV = UV
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ
    }
}