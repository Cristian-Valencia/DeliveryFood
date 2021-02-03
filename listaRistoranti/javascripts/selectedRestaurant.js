var menuFirstPlate;

var menuDess;

var menuDrink;

var orderList = [];

var flagList = [];

var totTest = [];

var totalPrice = 0;

window.onload=function()
{   



    menuFirstPlate = [
        {
            name: "Tropical Chicken Burger",
            littleInfo: "Un Grande Classico che non tramonterà mai.",
            price: 10,
            image: "hamburger",
            id: "burgerOne"
        },
    
        {
            name: "Double Chicken Burger",
            littleInfo: "Il pollo raddoppia.",
            price: 12,
            image: "hamburger2",
            id: "burgerTwo"
        },

        {
            name: "Jolly Hot-Dog",
            littleInfo: "Il trionfo del gusto.",
            price: 8,
            image: "hamburger3",
            id: "burgerThree"
        }
    ]

    menuDess = [
        {
            name: "Jolly Halo-Halo",
            littleInfo : "Un vortice di bontà.",
            price: 5,
            image: "halo",
            id: "dessertOne"
        },

        {
            name: "Rocky Road Sundae",
            littleInfo : "Dolcezza al cucchiaio.",
            price: 3,
            image: "rocky",
            id:"dessertTwo"
        },

        {
            name: "Mango Graham",
            littleInfo: "Frutto della nostra dolcezza.",
            price: 4,
            image: "mango",
            id: "dessertThree"
        }
    ]

    menuDrink = [
        {
            name: "Pepsi",
            price: 2,
            image: "pepsi",
            id: "drinkOne"
        },

        {
            name: "Sprite",
            price: 2, 
            image:"sprite",
            id: "drinkTwo"
        },

        {
            name: "Fanta",
            price: 3,
            image: "fanta",
            id: "drinkThree"
        }
    ]

    const burgerMenuBtn = document.querySelector(".burgerMenuContainer");
    const blankMenu = document.querySelector(".blankSpaceMenu");
    const lContainer = document.querySelector(".listContainer");
    // const emptyCart = document.querySelector(".emptyCart");
    const completeOrd = document.querySelector(".completeOrder");

    burgerMenuBtn.addEventListener("click", ()=>{

        document.querySelector(".listContainer").style.display="block";

        document.querySelector(".listContainer").classList.toggle("showListContainer");

        document.querySelector(".one").classList.toggle("oneX");

        document.querySelector(".two").classList.toggle("twoX");

        document.querySelector(".three").classList.toggle("threeX");

        if(lContainer.classList.contains("showListContainer")){
            blankMenu.style.display = "block";
        } else{
            blankMenu.style.display = "none";
            setTimeout(() => {document.querySelector(".listContainer").style.display="none";}, 500);
        }


    });

    
    
    var oneIndex;

    menuFirstPlate.map((element,index) =>{
        document.querySelector(".plateContainerOne").innerHTML += `
        <div>
            <div>
                <img alt="hamburger image" src="images/${element.image}.png">
            </div>
            <div>
                <h2>${element.name}</h2>
                <p>Prezzo: ${element.price} Euro</p>
                <button onclick="addToCart(${index})" class="addToCartBtn">Add To Cart</button>
            </div>
        </div>
        `;

        oneIndex= index
    });

    menuDess.map((element,index)=>{
        document.querySelector(".plateContainerTwo").innerHTML += `
        <div>
            <div>
                <img alt="dessert image" src="images/${element.image}.png">
            </div>
            <div>
                <h2>${element.name}</h2>
                <p>Prezzo: ${element.price} Euro</p>
                <button onclick="addToCartTwo(${index})" class="addToCartBtn">Add To Cart</button>
            </div>
        </div>
        `;
    });

    menuDrink.map((element,index)=>{
        document.querySelector(".plateContainerThree").innerHTML += `
        <div>
            <div>
                <img alt="dessert image" src="images/${element.image}.png">
            </div>
            <div>
                <h2>${element.name}</h2>
                <p>Prezzo: ${element.price} Euro</p>
                <button onclick="addToCartThree(${index})" class="addToCartBtn">Add To Cart</button>
            </div>
        </div>
        `;
    });

    // emptyCart.addEventListener("click",()=>{
    //     document.querySelector(".cartContainer").style.display="none";
    //     totTest =[];
    //     orderList = [];
    //     flagList = [];
    // })

    completeOrd.addEventListener("click", ()=>{
        window.location= "file:///Users/cristian.valencia/Desktop/DeliveryFood/index.html"
    });

}

function addToCart(index){

    
    document.querySelector(".cartContainer").style.display = "block";

    orderList.push(menuFirstPlate[index].id);

    console.log(menuFirstPlate[index]);

      var burgerOneQuantity = orderList.filter(function(element){
        return element === "burgerOne";
      });

      var burgerTwoQuantity = orderList.filter(function(element){
        return element === "burgerTwo";
      });

      var burgerThreeQuantity = orderList.filter(function(element){
          return element === "burgerThree";
      });

      const oneQ = burgerOneQuantity.length;

      const twoQ = burgerTwoQuantity.length;

      const threeQ = burgerThreeQuantity.length;

    if(!flagList.includes(menuFirstPlate[index].id)){
        document.querySelector(".orderListContainer").innerHTML += `
        <div class="ordersContainer">
            <div>
                <h2>${menuFirstPlate[index].name}</h2>
                <p>Prezzo: ${menuFirstPlate[index].price} euro</p>
            </div>

            <div>
                <h2 class="quantityContainer${menuFirstPlate[index].id}"></h2>
            </div>
        </div>
        `;
    }
    

    if(menuFirstPlate[index].id === "burgerOne"){
        document.querySelector(`.quantityContainer${menuFirstPlate[index].id}`).innerHTML= `Qt: ${oneQ}`
    } else if(menuFirstPlate[index].id === "burgerTwo"){
        document.querySelector(`.quantityContainer${menuFirstPlate[index].id}`).innerHTML= `Qt: ${twoQ}`
    } else {
        document.querySelector(`.quantityContainer${menuFirstPlate[index].id}`).innerHTML= `Qt: ${threeQ}`
    }

    flagList.push(menuFirstPlate[index].id);

    totTest.push(menuFirstPlate[index].price);

    console.log("questo è totTest", totTest);

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    totalPrice = totTest.reduce(reducer);

    document.querySelector(".totalAmount").innerHTML = `Total Amount: ${totalPrice} euro`;

};

function addToCartTwo(index){

    
    document.querySelector(".cartContainer").style.display = "block";

    orderList.push(menuDess[index].id);

    console.log("questo è orderList: ", orderList);

    console.log(menuDess[index]);

      var dessertOneQuantity = orderList.filter(function(element){
        return element === "dessertOne";
      });

      var dessertTwoQuantity = orderList.filter(function(element){
        return element === "dessertTwo";
      });

      var dessertThreeQuantity = orderList.filter(function(element){
          return element === "dessertThree";
      });

      const oneD = dessertOneQuantity.length;

      const twoD = dessertTwoQuantity.length;

      const threeD = dessertThreeQuantity.length;

    if(!flagList.includes(menuDess[index].id)){
        document.querySelector(".orderListContainer").innerHTML += `
        <div class="ordersContainer">
            <div>
                <h2>${menuDess[index].name}</h2>
                <p>Prezzo: ${menuDess[index].price} euro</p>
            </div>

            <div>
                <h2 class="quantityContainer${menuDess[index].id}"></h2>
            </div>
        </div>
        `;
    }
    

    if(menuDess[index].id === "burgerOne"){
        document.querySelector(`.quantityContainer${menuDess[index].id}`).innerHTML= `Qt: ${oneD}`
    } else if(menuFirstPlate[index].id === "burgerTwo"){
        document.querySelector(`.quantityContainer${menuDess[index].id}`).innerHTML= `Qt: ${twoD}`
    } else {
        document.querySelector(`.quantityContainer${menuDess[index].id}`).innerHTML= `Qt: ${threeD}`
    }

    flagList.push(menuDess[index].id);

    totTest.push(menuDess[index].price);

    console.log("questo è totTest", totTest);

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    totalPrice = totTest.reduce(reducer);

    document.querySelector(".totalAmount").innerHTML = `Total Amount: ${totalPrice} euro`;

};

function addToCartThree(index){

    
    document.querySelector(".cartContainer").style.display = "block";

    orderList.push(menuDrink[index].id);

    console.log("questo è orderList: ", orderList);

    console.log(menuDrink[index]);

      var drinkOneQuantity = orderList.filter(function(element){
        return element === "drinkOne";
      });

      var drinkTwoQuantity = orderList.filter(function(element){
        return element === "drinkTwo";
      });

      var drinkThreeQuantity = orderList.filter(function(element){
          return element === "drinkThree";
      });

      const oneD = drinkOneQuantity.length;

      const twoD = drinkTwoQuantity.length;

      const threeD = drinkThreeQuantity.length;

    if(!flagList.includes(menuDrink[index].id)){
        document.querySelector(".orderListContainer").innerHTML += `
        <div class="ordersContainer">
            <div>
                <h2>${menuDrink[index].name}</h2>
                <p>Prezzo: ${menuDrink[index].price} euro</p>
            </div>

            <div>
                <h2 class="quantityContainer${menuDrink[index].id}"></h2>
            </div>
        </div>
        `;
    }
    

    if(menuDrink[index].id === "burgerOne"){
        document.querySelector(`.quantityContainer${menuDrink[index].id}`).innerHTML= `Qt: ${oneD}`
    } else if(menuFirstPlate[index].id === "burgerTwo"){
        document.querySelector(`.quantityContainer${menuDrink[index].id}`).innerHTML= `Qt: ${twoD}`
    } else {
        document.querySelector(`.quantityContainer${menuDrink[index].id}`).innerHTML= `Qt: ${threeD}`
    }

    flagList.push(menuDrink[index].id);

    totTest.push(menuDrink[index].price);

    console.log("questo è totTest", totTest);

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    totalPrice = totTest.reduce(reducer);

    document.querySelector(".totalAmount").innerHTML = `Total Amount: ${totalPrice} euro`;

};