var arr = [
    {
        Image_src:"https://rukminim1.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100",
        title:"Grocery",
        href:"https://www.flipkart.com/grocery-supermart-store?marketplace=GROCERY&fm=neo%2Fmerchandising&iid=M_c4bfdce0-4d21-453d-8cdc-a91dd0507a22_1_372UD5BXDFYS_MC.CBUR1Q46W5F1&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Grocery_CBUR1Q46W5F1&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L0_view-all&cid=CBUR1Q46W5F1",
    },
    {
        Image_src:"https://rukminim1.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100",
        title:"Mobiles",
        href:"./mobile.html"
    }, 
    {
        Image_src:"https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100",
        title:"Fashion",
        href:"./product.html"
        
    },
     {
        Image_src:"https://rukminim1.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100",
        title:"Home & Furniture",
        href:"./Home.html"
    },
    {
        Image_src:"https://rukminim1.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100",
        title:"Travel",
        href:"https://www.flipkart.com/travel/flights?param=DTNavIcon&fm=neo%2Fmerchandising&iid=M_a5e03678-89dd-4a68-9e27-9bbc8fbbf149_1_372UD5BXDFYS_MC.V4ZPKTOAO321&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Travel_V4ZPKTOAO321&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L0_view-all&cid=V4ZPKTOAO321",
    },
    
    {
        Image_src:"https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100",
        title:"Appliances",
        href:"https://www.flipkart.com/tvs-and-appliances-new-clp-store?fm=neo%2Fmerchandising&iid=M_6c05edc9-98e3-4311-bafc-c88174b537f5_1_372UD5BXDFYS_MC.LO4IWVHA61BX&otracker=hp_rich_navigation_6_1.navigationCard.RICH_NAVIGATION_Appliances_LO4IWVHA61BX&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_6_L0_view-all&cid=LO4IWVHA61BX"
    },
    {
        Image_src:"https://rukminim1.flixcart.com/fk-p-flap/64/64/image/05d708653beff580.png?q=100",
        title:"Two Whellers",
        href:"./two weller.html"
    },
]

var a = arr.map(function(ele){
    var image = document.createElement("img")
    image.setAttribute("class","image_src")
    image.src = ele.Image_src;
    var p = document.createElement("p")
    p.setAttribute("class","p1")
    p.innerText = ele.title

    var box = document.createElement("div")
    box.append(image,p)
    console.log(box)
    // fasion added
   if (ele.title === "Fashion" && ele.href) {
        box.addEventListener("click", function () {
            window.location.href = ele.href;
        });
    }
    // mobile added
    if (ele.title === "Mobiles" && ele.href) {
        box.addEventListener("click", function () {
            window.location.href = ele.href;
        });
    }
    // grocery added
    if (ele.title === "Grocery" && ele.href) {
        box.addEventListener("click", function () {
            window.location.href = ele.href;
        });
    }
// travel added
if (ele.title === "Travel" && ele.href) {
    box.addEventListener("click", function () {
        window.location.href = ele.href;
    });
}
// appilancess added
if (ele.title === "Appliances" && ele.href) {
    box.addEventListener("click", function () {
        window.location.href = ele.href;
    });
}

// two weller added
if (ele.title === "Two Whellers" && ele.href) {
    box.addEventListener("click", function () {
        window.location.href = ele.href;
    });
}
// home and furnicher added
if (ele.title === "Home & Furniture" && ele.href) {
    box.addEventListener("click", function () {
        window.location.href = ele.href;
    });
}

 

    


     var section = document.getElementById("category")
     section.append(box)

})