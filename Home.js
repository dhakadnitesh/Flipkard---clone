var isauth = localStorage.getItem("isauth") || "Not Authenticated";

if (isauth !== "Authenticated") {
  window.location.href = "./signup.html";
  alert("please do signup");
}

let Home = [
  {
    imageUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-bedsheet/m/a/b/fre-101-1-10177-alaficer-original-imageht9harkhggq.jpeg?q=70",
    name: "Home Garage 180 TC",
    price: "₹576",
  },

  {
    imageUrl:
      "https://rukminim2.flixcart.com/image/612/612/l1fc0i80/mosquito-net/q/6/p/king-size-bed-la-mosquito-net-blue-80-la-mosquito-net-blue-la-original-imagdyfu2hg6gpwf.jpeg?q=70",
    name: "La verne polyester",

    price: "₹357",
  },
  {
    imageUrl:
      "https://rukminim2.flixcart.com/image/612/612/kxrvi4w0/carpet-rug/v/d/e/45-60-artificial-green-grass-floor-mat-habitat-original-imaga5kjnvnstfhm.jpeg?q=70",
    name: "Habited Green plastic",

    price: "₹200",
  },

  {
    imageUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/recliner/b/u/x/-original-imagt79q948hhrkc.jpeg?q=70",
    name: "Home Febric Manual Recliner",

    price: "₹12,000",
  },

  {
    imageUrl:
      " https://rukminim2.flixcart.com/image/612/612/kq2o2vk0/portable-laptop-table/6/e/v/plywood-black-gray-portable-laptop-table-pre-assembled-kids-original-imag45w6hfggkuyz.jpeg?q=70",
    name: "Solid wood study Table",
    price: "₹500",
  },

  {
    imageUrl:
      "https://rukminim2.flixcart.com/image/612/612/kv5kfww0/shoe-rack/z/d/x/5-door-5-shelf-fabric-metal-collapsible-shoe-stand-5-shelves-original-imag849gdf9m76d9.jpeg?q=70",
    name: "Owme plastic shoe rack",
    price: "₹1,999",
  },

  {
    imageUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/dining-set/w/l/q/88-9-white-114-0-rosewood-sheesham-60-rectangle-44-45-101-6-40-original-imagtbvdzrftrbrz.jpeg?q=70",
    name: "Home Dining",
    price: "₹20,999",
  },

  {
    imageUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/bean-bag/b/l/x/4xl-brown-cushion-bean-bag-giglick-original-imagref8kxtruwqu.jpeg?q=70",
    name: "Bean Bag Cusion",
    price: "₹2,999",
  },

  {
    imageUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/side-table/j/4/q/35-100-stainless-steel-33-kl-2206g-console-table-the-attic-80-original-imagrhfrsgeyqngr.jpeg?q=70",
    name: "Steel console Table",
    price: "₹5000",
  },

  {
    imageUrl:
      "https://rukminim2.flixcart.com/image/612/612/l3ahpjk0/side-table/9/7/w/rosewood-sheesham-twf-cnslt-244-console-table-taskwood-furniture-original-imagefxx5z6qjnfc.jpeg?q=70",
    name: "Sheesham wood Table",
    price: "₹17,999",
  },
];

localStorage.setItem("Productdata", JSON.stringify(Home));

var collection = JSON.parse(localStorage.getItem("Productdata")) || [];

var mobile = document.getElementById("collection");

function sortHightoLow() {
  collection.sort(function (a, b) {
    return (
      parseInt(b.price.replace("₹", "").replace(",", "")) -
      parseInt(a.price.replace("₹", "").replace(",", ""))
    );
  });

  mobile.innerHTML = "";

  prodata();
}

function sortLowtoHigh() {
  collection.sort(function (a, b) {
    return (
      parseInt(a.price.replace("₹", "").replace(",", "")) -
      parseInt(b.price.replace("₹", "").replace(",", ""))
    );
  });

  mobile.innerHTML = "";

  prodata();
}

function addTooCart(ele) {
  let cartDeals = JSON.parse(localStorage.getItem("cartDeals")) || [];
  cartDeals.push(ele);
  localStorage.setItem("cartDeals", JSON.stringify(cartDeals));
  alert("Product added to the cart!");
}

function prodata() {
  collection.forEach((ele) => {
    var card = document.createElement("div");

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
    btn.innerText = "Add to Card";
    btn.setAttribute("class", "btnClick");

    btn.onclick = function () {
      addTooCart(ele);
    };

    card.append(image, h4, price, btn);
    mobile.append(card);
  });
}
prodata();











