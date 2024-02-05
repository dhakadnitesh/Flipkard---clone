var isauth = localStorage.getItem("isauth") || "Not Authenticated";

if(isauth !== "Authenticated"){
    window.location.href = "./signup.html"
}


