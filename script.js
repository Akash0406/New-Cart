var cosp1name = document.getElementById("cos-name-p1");
var cosp1price = document.getElementById("cos-price-p1");
var cosp2name = document.getElementById("cos-name-p2");
var cosp2price = document.getElementById("cos-price-p2");
var hosp1name = document.getElementById("hos-name-p1");
var hosp1price = document.getElementById("hos-price-p1");
var hosp2name = document.getElementById("hos-name-p2");
var hosp2price = document.getElementById("hos-price-p2");

var cart = {};


var dataFetch = fetch('data.json')
    .then(Response => Response.json())
    .then(data => {
        console.log(data);
        var setCos = data.data[0];
        var setHos = data.data[1];
        console.log(setCos);
        console.log(setHos);
        // productList: Array(2)

        cosp1name.innerHTML = setCos.productList[0].name;
        cosp1price.innerHTML = setCos.productList[0].price;


        cosp2name.innerHTML = setCos.productList[1].name;
        cosp2price.innerHTML = setCos.productList[1].price;


        hosp1name.innerHTML = setHos.productList[0].name;
        hosp1price.innerHTML = setHos.productList[0].price;

        hosp2name.innerHTML = setHos.productList[1].name;
        hosp2price.innerHTML = setHos.productList[1].price;


    })



