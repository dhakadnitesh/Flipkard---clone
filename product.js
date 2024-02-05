var isauth = localStorage.getItem("isauth") || "Not Authenticated";

if(isauth !== "Authenticated"){
    window.location.href = "./signup.html"
    alert("please do signup")
}








let sample_data = [
    {
        Brand:"Arrow",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/y/m/r/s-gm-3155-beard-1034-geum-original-imagxf9hdds8hg3k.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"₹758",
        actualprice:"2,299",
        Rating:3.4
    },
    {
        Brand:"Arrow",
        img_src:"https://rukminim2.flixcart.com/image/612/612/k7f34i80/t-shirt/r/y/r/m-10940528-roadster-original-imafpnru9dnr3phh.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"₹1,329",
        actualprice:"1,799",
        Rating:4.4

    },
    {
        Brand:"Arrow",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/r/x/d/50-anaesh1035-arrow-newyork-original-imagg48fqgxezpnk.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"₹1,286",
        actualprice:"2,499",
        Rating:3.2

    }, {
        Brand:"Arrow",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/2/z/o/46-ares02011a-arrow-sport-original-imagknbgg4dcqvvv.jpeg?q=70",
        names:"Men Slim Self Shirt",
        price:"₹1,758",
        actualprice:"2,099",
        Rating:3.9

    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/w/o/6/4xl-db1024-3bros-original-imagt7byhhrqdkym.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"₹558",
        actualprice:"1,399",
        Rating:4.8

    },
    {
        Brand:"Puma",
       img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/p/j/c/s-ts12-vebnor-original-imagp6jcsgekgda4.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"₹558",
        actualprice:"1,399",
        Rating:3.9





    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/6/9/7/m-urm006361p-urgear-original-imagz3gw6ubzyhht.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"₹5578",
        actualprice:"10,399",
        Rating:5.0

    },
    
    {
        Brand:"Puma",
        img_src:"",
        names:"Men Slim Fit Self",
        price: '₹999',
        actualprice:"1,399",
        Rating:4.2

    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/s/3/j/m-22mo116-2-moca-by-monte-carlo-original-imagkhz8pfsa7eyp.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"₹558",
        actualprice:"1,399",
        Rating:3.9

    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/n/m/e/m-int-ts-203-f-ns1-r-l-bk-integriti-original-imaggaqsqaqj5pyu.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"558",
        actualprice:"1,399",
        Rating:3.0

    },
    {
        Brand:"Puma",
        // img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/9/z/c/-original-imagg9zwzngacvry.jpeg?q=70",
        
        img_src:"https://rukminim2.flixcart.com/image/612/612/l251xu80/t-shirt/o/t/l/xl-16998580-roadster-original-imagdjrja5y3x9t5.jpeg?q=70",

        names:"Men Slim Fit Self",
        price:"558",
        actualprice:"1,399",
        Rating:2.4

    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/9/z/c/-original-imagg9zwzngacvry.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"5578",
        actualprice:"10,399",
        Rating:3.3

    },
    {
        Brand:"Arrow",
        // img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/i/i/s/-original-imaghgchxvgkactc.jpeg?q=70",
        img_src:"https://rukminim2.flixcart.com/image/612/612/l251xu80/t-shirt/o/t/l/xl-16998580-roadster-original-imagdjrja5y3x9t5.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"₹758",
        actualprice:"2,299",
        Rating:3.1

    },
    {
        Brand:"Arrow",
        // img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/a/p/c/40-arfkosh0024-arrow-original-imagszket7qcdbze.jpeg?q=70",
       img_src:"https://rukminim2.flixcart.com/image/612/612/kdxfc7k0-0/t-shirt/h/e/s/m-11948318-roadster-original-imafuq33sftng5ef.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"₹1,329",
        actualprice:"1,799",
        Rating:4.6

    },
    {
        Brand:"Arrow",
        // img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/r/x/d/50-anaesh1035-arrow-newyork-original-imagg48fqgxezpnk.jpeg?q=70",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/m/x/d/s-urm012501p-urgear-original-imagttevshzjtdde.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"₹1,286",
        actualprice:"2,499",
        Rating:3.9

    }, 
    

]

    localStorage.setItem("Productdata",JSON.stringify(sample_data))

    var collection = JSON.parse(localStorage.getItem("Productdata")) || [];

   var fashion =  document.getElementById("collection")


   function sortHightoLow() {
    collection.sort(function (a, b) {
        return b.Rating - a.Rating;
    });

    fashion.innerHTML = "";

    prodata();
}


function sortLowtoHigh() {
    collection.sort(function (a, b) {
        return a.Rating - b.Rating;
    });

    fashion.innerHTML = "";

    prodata();
}

function addToCart(ele) {
    let cartDetails = JSON.parse(localStorage.getItem("cartDetails")) || []
    cartDetails.push(ele);
    localStorage.setItem("cartDetails",JSON.stringify(cartDetails))
    alert("Product added to the cart!");
}




   function prodata(){
   
    collection.forEach(function(ele){

        var box = document.createElement("div")
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

        var btn = document.createElement("button")
        btn.innerText = "Add to Card"
        btn.setAttribute("class","btn")

        btn.onclick = function(){
            addToCart(ele)
        }
       


        box.append(img,Brand,price1,Rating,btn);
        fashion.append(box)


    





    })





   }

   prodata()



