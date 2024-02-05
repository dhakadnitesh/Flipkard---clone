var arr = JSON.parse(localStorage.getItem("userData")) || [];

var form = document.getElementById("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var foundUser = arr.find(function(user) {
        return user.email === email && user.password === password;
    });

    if (foundUser) {
        localStorage.setItem("isauth","Authenticated")
        alert("Sign in successfull");
        window.location.href = "index.html"


    } else {
        alert("Wrong credentials , please check the infomation... ");
        window.location.href = "signup.html"
    }
});
