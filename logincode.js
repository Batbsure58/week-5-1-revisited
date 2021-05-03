function checkcreds() {
    //these varible are to bring up the name after the login on the next screen with the badge number. 
    // and to also store the frist name
    var firstName = document.getElementById("fName").value;
    // also for store the last name
    var lastName = document.getElementById("lName").value;
    // and so for the badge number.
    var badgeNumb = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName;

    if (fullName.length > 20 || fullName.length == 1) {
        //if true for names
        document.getElementById("loginStatus").innerHTML = "Invalid name!!!";

    }
    //if true for badge numbers
    else if (badgeNumb > 999 || badgeNumb < 1) {
        document.getElementById("loginStatus").innerHTML = "Badge Number invalid!!!";
    }

    else {
        alert("Access Granted! Welcome " + fullName);
        location.replace("index.html");
    }




}