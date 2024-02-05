var isauth = localStorage.getItem("isauth") || "Not Authenticated";

if(isauth !== "Authenticated"){
    window.location.href = "./signup.html"
    alert("please do signup")

}



var products = [
    {
      imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70',
      name: 'APPLE iPhone 14 (Blue, 128 GB)',
      price: '₹57,999'
    },
    {
      imageUrl: 'https://rukminim2.flixcart.com/image/312/312/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dpyjvgg3j.jpeg?q=70',
      name: 'APPLE iPhone 12 (Blue, 64 GB)',
      price: '₹42,999'
    },
    {
      imageUrl: 'https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/2/y/o/iphone-13-mlpk3hn-a-apple-original-imag6vpyur6hjngg.jpeg?q=70',
      name: 'APPLE iPhone 13 (Blue, 128 GB)',
      price: '₹58,900'
    },
    {
      imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/r/x/-original-imagth5xf4shxcuv.jpeg?q=70',
      name: 'SAMSUNG Galaxy S22 5G (Phantom White, 128 GB)',
      price: '₹39,999'
    },
    {
      imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/x/0/-original-imagtnqjjfgxzpz4.jpeg?q=70',
      name: 'Samsung Galaxy S21 FE 5G with Snapdragon 888 (Navy, 128 GB)',
      price: '₹32,999'
    },
    {
      imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/x/0/-original-imagszg3qxqgdx9c.jpeg?q=70',
      name: 'Infinix Zero 30 5G (Rome Green, 256 GB)',
      price: '₹23,999'
    },
    {
      imageUrl: 'https://rukminim2.flixcart.com/image/312/312/l4ln8nk0/mobile/6/s/i/-original-imagfgf9nf8psuyv.jpeg?q=70',
      name: 'OPPO A57 (Glowing Green, 64 GB)',
      price: '₹10,987'
    },
    {
      imageUrl: 'https://rukminim2.flixcart.com/image/312/312/l0zm64w0/mobile/w/0/i/-original-imagcnn5ahg6pwzd.jpeg?q=70',
      name: 'OPPO A96 (Starry Black, 128 GB)',
      price: '₹15,849'
    },
    {
      imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/j/n/-original-imags37gyajqxkgp.jpeg?q=70',
      name: 'REDMI 12 (Moonstone Silver, 128 GB)',
      price: '₹10,999'
    },
    {
      imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/a/g/-original-imags37h4prxjazz.jpeg?q=70',
      name: 'REDMI 12 (Pastel Blue, 128 GB)',
      price: '₹10,999'
    }
  ];



  localStorage.setItem("Productdata",JSON.stringify(products))

  var collection = JSON.parse(localStorage.getItem("Productdata")) || [];

 var mobile =  document.getElementById("collection")


 function sortHightoLow() {
    collection.sort(function (a, b) {
        return parseInt(b.price.replace('₹', '').replace(',', '')) - parseInt(a.price.replace('₹', '').replace(',', ''));
    });

    mobile.innerHTML = "";

    prodata();
}

function sortLowtoHigh() {
    collection.sort(function (a, b) {
        return parseInt(a.price.replace('₹', '').replace(',', '')) - parseInt(b.price.replace('₹', '').replace(',', ''));
    });

    mobile.innerHTML = "";

    prodata();
}



function addTooCart(ele) {
    let cartDeals = JSON.parse(localStorage.getItem("cartDeals")) || []
    cartDeals.push(ele);
    localStorage.setItem("cartDeals",JSON.stringify(cartDeals))
    alert("Product added to the cart!");

}

function prodata(){

    collection.forEach((ele) =>{
        var card = document.createElement("div");

        var image = document.createElement("img");
        image.src = ele.imageUrl
        image.setAttribute("class","image")
        var h4 = document.createElement("h4");
        h4.innerText = ele.name
        h4.setAttribute("class","h4")
        var price = document.createElement("p");
        price.innerText = ele.price;
        price.setAttribute("class","p")
        var btn = document.createElement("button");
        btn.innerText="Add to Card";
        btn.setAttribute("class", "btnClick")


        btn.onclick = function(){
            addTooCart(ele)
        }

      card.append(image,h4,price,btn);
      mobile.append(card);
    })
}
prodata()

// <---------------->


