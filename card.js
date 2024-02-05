var isauth = localStorage.getItem("isauth") || "Not Authenticated";

if(isauth !== "Authenticated"){
    window.location.href = "./signup.html"
    alert("please do signup")

}




var products = document.getElementById("products");  

var main = JSON.parse(localStorage.getItem("cartDetails"));
// var main2 = JSON.parse(localStorage.getItem("cartDeals"));


prodata(main);

function prodata(collection) {
    collection.forEach(function (ele,i) {
        var box = document.createElement("div")
        box.setAttribute("class","box")
        var price1 = document.createElement("h4")
        price1.innerText = ele.price;
        price1.setAttribute("class","price")
        var price2 = document.createElement("span")
        price2.innerText = ele.actualpriceprice;
        

        var img = document.createElement("img")
        img.src = ele.img_src;
        img.setAttribute("class","img")

        var Brand = document.createElement("h3")
        Brand.innerText = ele.Brand
        Brand.setAttribute("class","brand")

        var Rating = document.createElement("h5")
        Rating.innerText = `${ele.Rating} star`
        Rating.setAttribute("class","Rating")

        var btn  = document.createElement("button")
        btn.innerText = "Remove From Card"
        btn.setAttribute("class","btn")

        btn.onclick = function(){
            addToCart(ele,i)
        }
       


        box.append(img,Brand,price1,Rating,btn);
        fashion.append(box)


    
    });
}

function addToCart(ele,i) 
{
    main.splice(i,1)
    console.log(main)
    alert("Product removed successfully. After refreshing, it will be removed automatically!");
    localStorage.setItem("cartDetails", JSON.stringify(main));



}



// <------>
// <------>
// <------>
// <------>
// <------>

var product1 = document.getElementById("product1");  

var main2 = JSON.parse(localStorage.getItem("cartDeals"));
prodata(main2);

function prodata(collection) {
    collection.forEach((ele, i) => {
        var card = document.createElement("div");
        card.setAttribute("class","card1")

        var image = document.createElement("img");
        image.src = ele.imageUrl;
        image.setAttribute("class", "image");
        var h4 = document.createElement("h4");
        h4.innerText = ele.name;
        h4.setAttribute("class", "h4");
        var price = document.createElement("p");
        price.innerText = ele.price;
        price.setAttribute("class", "p");
        var btn = document.createElement("button");
        btn.innerText = "Remove From Cart";
        btn.setAttribute("class", "btnClick");

        btn.onclick = function () {
            addTooCart(ele, i);
        };

        card.append(image, h4, price, btn);
        mobile.append(card);  // Change 'mobile' to 'product1'
    });
}

function addTooCart(ele, i) {
    main2.splice(i, 1);
    console.log(main2);
    alert("Product removed successfully. After refreshing, it will be removed automatically!");
    localStorage.setItem("cartDeals", JSON.stringify(main2));
}
