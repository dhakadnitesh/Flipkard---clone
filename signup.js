











var arr = JSON.parse(localStorage.getItem("userData")) || [];
console.log(arr)

var form = document.getElementById("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    if (password.value.length === 0) {
        alert("Enter password");
    } 
    
    else if (password.value.length !== 8) {
        alert("Password should have 8 characters/numbers");
    }
    
    else {
        var userData = {
            email: email.value,
            password: password.value
        };

        arr.push(userData);

        localStorage.setItem("userData", JSON.stringify(arr));

        alert("Signup Successful");

        window.location.href = "signin.html"
    }
});
