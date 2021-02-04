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


    const loginBtn = document.querySelector(".linkLog");
    const loginBtnDesk = document.querySelector(".linkLogDesktop");
    const space = document.querySelector(".blankSpace");
    const accedi = document.querySelector(".accediContainer");
    const regBtn = document.querySelector(".registrationLink");
    const registration = document.querySelector(".registrazioneContainer");
    const mailInput = document.querySelector(".email");
    const userNameInput = document.querySelector(".userName");
    const passInput = document.querySelector(".password");
    const confPassInput = document.querySelector(".confirmPassword");
    const errorMessage = document.querySelector(".registrationError");
    const errorMessageUser = document.querySelector(".userNameError");
    const errorMessageMail = document.querySelector(".mailError");
    const errorMessagePass = document.querySelector(".passError");
    const agreedInCond = document.querySelector(".agreedCheck");
    const inputRegistration = document.querySelectorAll(".registrazioneContainer input");
    const btnReg = document.querySelector(".regBtn");
    const returnLogin = document.querySelector(".retBtn");
    const user = {
        userName: " ",
        eMail: " ",
        pass: " ",
        agreedInCondition: false
    };
    const mailLogInput = document.querySelector(".logMail");
    const passLogInput = document.querySelector(".logPass");
    const buttonLog = document.querySelector(".logBtn");


    



    loginBtn.addEventListener("click", () =>{

        accedi.classList.toggle("accediContainerShow");

        space.classList.toggle("blankSpaceShow");

        blankMenu.classList.remove("blankSpaceMenuShow");

    });

    loginBtnDesk.addEventListener("click", () =>{

        accedi.classList.toggle("accediContainerShow");

        space.classList.toggle("blankSpaceShow");

        

    })

    space.addEventListener("click", () =>{

        accedi.classList.remove("accediContainerShow");

        space.classList.remove("blankSpaceShow");

        registration.classList.remove("registrazioneContainerShow");

    })

    regBtn.addEventListener("click", () =>{

        accedi.classList.remove("accediContainerShow");

        registration.classList.add("registrazioneContainerShow");

    })

    userNameInput.addEventListener("change", (event) =>{
        user.userName = event.target.value;
        const oneLength = userNameInput.getAttribute("data-min");
        if(user.userName.length >= oneLength ) {
            userNameInput.classList.add("ok");
            userNameInput.classList.remove("error");
            errorMessageUser.classList.remove("userNameErrorShow");
        } else{
            userNameInput.classList.add("error");
            userNameInput.classList.remove("ok");
            errorMessageUser.classList.add("userNameErrorShow");
        }
    });

    mailInput.addEventListener("change", (event) =>{
        user.eMail = event.target.value;
        const twoLength = mailInput.getAttribute("data-min");
        if(user.eMail.length >= twoLength ) {
            mailInput.classList.add("ok");
            mailInput.classList.remove("error");
            errorMessageMail.classList.remove("mailErrorShow");
        } else{
            mailInput.classList.add("error");
            mailInput.classList.remove("ok");
            errorMessageMail.classList.add("mailErrorShow");
        }
    });

    passInput.addEventListener("change", (event) =>{
        user.pass = event.target.value;
        const threeLength = passInput.getAttribute("data-min");
        if(user.pass.length >= threeLength ) {
            passInput.classList.add("ok");
            passInput.classList.remove("error");
            errorMessagePass.classList.remove("passErrorShow");
        } else{
            passInput.classList.add("error");
            passInput.classList.remove("ok");
            errorMessagePass.classList.add("passErrorShow");
        }
    });

    confPassInput.addEventListener("change", (event) =>{
        if(user.pass === event.target.value){
            confPassInput.classList.add("ok");
            confPassInput.classList.remove("error");
            passInput.classList.remove("error");
            errorMessage.classList.remove("registrationErrorShow");

        } else{
            console.log("errore");
            errorMessage.classList.add("registrationErrorShow");
            passInput.classList.add("error");
            confPassInput.classList.add("error");
        }
    });

    agreedInCond.addEventListener("change", () =>{
        user.agreedInCondition = !user.agreedInCondition;
        for(i=0;i<=3;i++){

            if(inputRegistration[i].classList.contains("ok") && user.agreedInCondition == true){
                btnReg.disabled = false;
                btnReg.style.opacity = "1";
            }
        }
    });

    btnReg.addEventListener("click", (event) => {
        event.preventDefault();
        space.classList.remove("blankSpaceShow");
        registration.classList.remove("registrazioneContainerShow");
        document.querySelector(".welcomeMobile").style.display="none";
        document.querySelector(".welcomeMobileName").style.display="block";
        document.querySelector(".welcomeMobileName").innerHTML += `<a href=# class="linkLogName">Benvenuto ${user.userName}<a/>`;
        // 

        const linkDesktop = document.querySelector(".linkLogDesktop");
        linkDesktop.remove();
        document.querySelector(".welcomePlace").innerHTML += "<a href=#>Benvenuto " + user.userName + "<a/>";
    });
    
    returnLogin.addEventListener("click", () =>{

        accedi.classList.add("accediContainerShow");

        registration.classList.remove("registrazioneContainerShow");
    })



    mailLogInput.addEventListener("change", (event) => {
        const lengthOne = mailLogInput.getAttribute("data-min");
        console.log(event.target.value.length);

        if(event.target.value.length >= lengthOne){
            mailLogInput.classList.add("ok");
            mailLogInput.classList.remove("error");
        } else {
            mailLogInput.classList.add("error");
            mailLogInput.classList.remove("ok");
        }
    });


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

    completeOrd.addEventListener("click", ()=>{
        window.location= "file:///Users/cristian.valencia/Desktop/DeliveryFood/index.html"
    });

}

function addToCart(index){

    
    document.querySelector(".cartContainer").style.display = "block";

    orderList.push(menuFirstPlate[index].id);

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
                <button onclick="addOne(${index})">+</button>
                <button onclick="removeOne(${index})">-</button>
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

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    totalPrice = totTest.reduce(reducer);

    document.querySelector(".totalAmount").innerHTML = `Total Amount: ${totalPrice} euro`;

};

function removeO(index){
        orderList.splice(menuFirstPlate[index].id,1);

        totTest.splice(totTest.findIndex(item => item === menuFirstPlate[index].price ), 1);
    
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
    
        totalPrice = totTest.reduce(reducer);
    
        document.querySelector(".totalAmount").innerHTML = `Total Amount: ${totalPrice} euro`;
    
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
    
          if(menuFirstPlate[index].id === "burgerOne"){
            document.querySelector(`.quantityContainer${menuFirstPlate[index].id}`).innerHTML= `Qt: ${oneQ}`
        } else if(menuFirstPlate[index].id === "burgerTwo"){
            document.querySelector(`.quantityContainer${menuFirstPlate[index].id}`).innerHTML= `Qt: ${twoQ}`
        } else {
            document.querySelector(`.quantityContainer${menuFirstPlate[index].id}`).innerHTML= `Qt: ${threeQ}`
        }
}

function addToCartTwo(index){

    
    document.querySelector(".cartContainer").style.display = "block";

    orderList.push(menuDess[index].id);

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
                <button onclick="addTwo(${index})">+</button>
                <button onclick="removeTw(${index})">-</button>
            </div>
        </div>
        `;
    };
    

    if(menuDess[index].id === "dessertOne"){
        document.querySelector(`.quantityContainer${menuDess[index].id}`).innerHTML = `Qt: ${oneD}`
    } else if(menuDess[index].id === "dessertTwo"){
        document.querySelector(`.quantityContainer${menuDess[index].id}`).innerHTML = `Qt: ${twoD}`
    } else {
        document.querySelector(`.quantityContainer${menuDess[index].id}`).innerHTML = `Qt: ${threeD}`
    };

    flagList.push(menuDess[index].id);

    totTest.push(menuDess[index].price);

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    totalPrice = totTest.reduce(reducer);

    document.querySelector(".totalAmount").innerHTML = `Total Amount: ${totalPrice} euro`;
    


};

function removeTw(index){

    orderList.splice(menuDess[index].id,1);

    totTest.splice(totTest.findIndex(item => item === menuDess[index].price ), 1);

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    totalPrice = totTest.reduce(reducer);

    document.querySelector(".totalAmount").innerHTML = `Total Amount: ${totalPrice} euro`;

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

      if(menuDess[index].id === "dessertOne"){
        document.querySelector(`.quantityContainer${menuDess[index].id}`).innerHTML= `Qt: ${oneD}`
    } else if(menuDess[index].id === "dessertTwo"){
        document.querySelector(`.quantityContainer${menuDess[index].id}`).innerHTML= `Qt: ${twoD}`
    } else {
        document.querySelector(`.quantityContainer${menuFimenuDessrstPlate[index].id}`).innerHTML= `Qt: ${threeD}`
    }

};

function addToCartThree(index){

    
    document.querySelector(".cartContainer").style.display = "block";

    orderList.push(menuDrink[index].id);


      var drinkOneQuantity = orderList.filter(function(element){
        return element === "drinkOne";
      });

      var drinkTwoQuantity = orderList.filter(function(element){
        return element === "drinkTwo";
      });

      var drinkThreeQuantity = orderList.filter(function(element){
          return element === "drinkThree";
      });

      const oneDr = drinkOneQuantity.length;

      const twoDr = drinkTwoQuantity.length;

      const threeDr = drinkThreeQuantity.length;

    if(!flagList.includes(menuDrink[index].id)){
        document.querySelector(".orderListContainer").innerHTML += `
        <div class="ordersContainer">
            <div>
                <h2>${menuDrink[index].name}</h2>
                <p>Prezzo: ${menuDrink[index].price} euro</p>
            </div>

            <div>
                <h2 class="quantityContainer${menuDrink[index].id}"></h2>
                <button onclick="addThr(${index})">+</button>
                <button onclick="removeThr(${index})">-</button>
            </div>
        </div>
        `;
    }
    

    if(menuDrink[index].id === "drinkOne"){
        document.querySelector(`.quantityContainer${menuDrink[index].id}`).innerHTML= `Qt: ${oneDr}`
    } else if(menuDrink[index].id === "drinkTwo"){
        document.querySelector(`.quantityContainer${menuDrink[index].id}`).innerHTML= `Qt: ${twoDr}`
    } else {
        document.querySelector(`.quantityContainer${menuDrink[index].id}`).innerHTML= `Qt: ${threeDr}`
    }

    flagList.push(menuDrink[index].id);

    totTest.push(menuDrink[index].price);

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    totalPrice = totTest.reduce(reducer);

    document.querySelector(".totalAmount").innerHTML = `Total Amount: ${totalPrice} euro`;

};

function removeTh(index){

    orderList.splice(menuDrink[index].id,1);

    totTest.splice(totTest.findIndex(item => item === menuDrink[index].price ), 1);

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    totalPrice = totTest.reduce(reducer);

    document.querySelector(".totalAmount").innerHTML = `Total Amount: ${totalPrice} euro`;

    var drinkOneQuantity = orderList.filter(function(element){
        return element === "drinkOne";
      });

      var drinkTwoQuantity = orderList.filter(function(element){
        return element === "drinkTwo";
      });

      var drinkThreeQuantity = orderList.filter(function(element){
          return element === "drinkThree";
      });

      const oneDr = drinkOneQuantity.length;

      const twoDr = drinkTwoQuantity.length;

      const threeDr = drinkThreeQuantity.length;

      if(menuDrink[index].id === "drinkOne"){
        document.querySelector(`.quantityContainer${menuDrink[index].id}`).innerHTML= `Qt: ${oneDr}`
    } else if(menuDrink[index].id === "drinkTwo"){
        document.querySelector(`.quantityContainer${menuDrink[index].id}`).innerHTML= `Qt: ${twoDr}`
    } else {
        document.querySelector(`.quantityContainer${menuDrink[index].id}`).innerHTML= `Qt: ${threeDr}`
    }

}

const addOne = (index) =>{
    addToCart(index);
};

const removeOne = (index) =>{
    removeO(index);
};

const addTwo = (index =>{
    addToCartTwo(index)
});

const removeTo = (index) =>{
    removeTw(index);
}

const addThr = (index) =>{
    addToCartThree(index);
};

const removeThr =(index) =>{
    removeTh(index);
}
