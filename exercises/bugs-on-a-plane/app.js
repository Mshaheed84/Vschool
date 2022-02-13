var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");
var query = document.querySelector;

function formAlert() {
    var firstName = form.querySelector('first-name').value;
    var lastName = form.querySelector("last-name");
    var age = form.querySelector("age");
    var gender = form.querySelector("gender");
    var location = form.querySelector("travel-location");
    var diet = [];
    if (document.getElementById("vegan").checked) {// An error happens on this line
        diet.push(form.getElementById("vegan").value);
    }
    if (document.getElementById("gluten").checked) {
        diet.push(form.getElementById("gluten").value);
    }
    if (document.getElementById("paleo").checked) {
        diet.push(form.getElementById("paleo").value);
    }
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}
submit.addEventListener("click", formAlert);