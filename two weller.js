var isauth = localStorage.getItem("isauth") || "Not Authenticated";

if(isauth !== "Authenticated"){
    window.location.href = "./signup.html"
    alert("please do signup..")
}


var TwoWheller = [
    {imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/motorcycle/z/h/g/-original-imagtbmassgzunxd.jpeg?q=70",
      name:  "Hero Karizma" ,
      price: "₹1,17,000"
    },
    {
        imageUrl:"https://rukminim2.flixcart.com/image/612/612/xif0q/motorcycle/c/z/t/drum-self-kick-glamour-drum-drum-booking-for-ex-showroom-price-original-imagtnjz6p5fgycd.jpeg?q=70",
        name:"Hero Glamour",
        price: "₹1,00,000"
},
{
    imageUrl:"https://rukminim2.flixcart.com/image/612/612/xif0q/motorcycle/z/i/o/-original-imags2ahgn2fczmx.jpeg?q=70",
    name:"Hero Splender",
    price: "₹1,09,000"

},
{
    imageUrl:"https://rukminim2.flixcart.com/image/612/612/xif0q/motorcycle/y/b/w/-original-imagsffy6ut3stkf.jpeg?q=70",
    name:"Hero Splender+",
    price: "₹1,11,000"


},
{
    imageUrl:"https://rukminim2.flixcart.com/image/612/612/xif0q/electric-bike-scooter/u/j/a/-original-imagg9u6wargyj2k.jpeg?q=70",
    name:"Hero Strem",
    price: "₹1,03,000"


},
{
    imageUrl:"https://rukminim2.flixcart.com/image/612/612/xif0q/motorcycle/a/s/i/drum-self-kick-passion-drum-97-2-pan-india-hero-original-imagqhyabzpg98sg.jpeg?q=70",
    name:"Hero Passion+",
    price: "₹90,000"


},
{
    imageUrl:"https://rukminim2.flixcart.com/image/612/612/xif0q/motorcycle/r/t/h/-original-imagnrh5bbbffupn.jpeg?q=70",
    name:"Hero Super Splender",
    price: "₹80,000"


},
{
    imageUrl:"https://rukminim2.flixcart.com/image/612/612/xif0q/motorcycle/e/2/s/2023-self-kick-xpulse-200t-4v-disc-booking-for-ex-showroom-price-original-imagtnkfznx3fkwg.jpeg?q=70",

    name:"Hero X-Plus",
    price: "₹1,36,000"


},
{
    // imageUrl:"https://rukminim2.flixcart.com/image/612/612/xif0q/motorcycle/n/w/s/-original-imagtwecqhgrekw6.jpeg?q=70",
    imageUrl:"https://rukminim2.flixcart.com/image/612/612/xif0q/motorcycle/e/2/s/2023-self-kick-xpulse-200t-4v-disc-booking-for-ex-showroom-price-original-imagtnkfznx3fkwg.jpeg?q=70",
    name:"Hero HF Delux",
    price: "₹60,000"


},
{
   imageUrl:"https://rukminim2.flixcart.com/image/612/612/xif0q/electric-bike-scooter/j/s/v/-original-imagg9xgpgez3tbx.jpeg?q=70",
    name:"Hf delux+",
    price: "₹1,02,000"


},
{
    imageUrl:"https://rukminim2.flixcart.com/image/612/612/xif0q/motorcycle/r/t/h/-original-imagnrh5bbbffupn.jpeg?q=70",
    name:"Super Splender+",
    price: "₹55,000"


},


]





localStorage.setItem("Productdata",JSON.stringify(TwoWheller))

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