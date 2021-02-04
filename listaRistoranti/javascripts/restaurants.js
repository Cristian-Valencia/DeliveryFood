var test = localStorage.getItem("addressFrom");



window.onload=function()
{   

    const burgerMenuBtn = document.querySelector(".burgerMenuContainer");
    const blankMenu = document.querySelector(".blankSpaceMenu");
    const lContainer = document.querySelector(".listContainer");
    const localAddress = document.querySelector(".geoPosition");
    var objectSelected;


    const restaurantsArr = [
        {
            name: "Jollibee",
            type: "Fast Food",
            delTime: "5 Minuti",
            delCost: "5 Euro",
            minOrder: "10 Euro",
            distance: "5km",
            image: "jollibee",
        },

        {
            name: "Margherita Bistrot",
            type: "Pizza",
            delTime: "25 Minuti",
            delCost: "8 Euro",
            minOrder: "20 Euro",
            distance: "16 km",
            image: "pizza"
        },

        {
            name: "Panda Club Poke",
            type: "Poke",
            delTime: "10 Minuti",
            delCost: "12 Euro",
            minOrder: "15 Euro",
            distance: "12 km",
            image: "poke"
        },

        {
            name: "Hokkaido",
            type: "Giapponese",
            delTime: "8 Minuti",
            delCost: "12 Euro",
            minOrder: "50 Euro",
            distance: "2 km",
            image: "giap"
        },

        {
            name: "Kohinoor",
            type: "Indiano",
            delTime: "30 Minuti",
            delCost: "Gratuito",
            minOrder: "25 Euro",
            distance: "20 km",
            image: "indian"
        },

        {
            name: "Greco Egeo",
            type: "Mediterraneo",
            delTime: "2 min",
            delCost: "10 Euro",
            minOrder: "40 Euro",
            distance: "500 m",
            image: "mediterranean"
        }

        
    ]

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

    restaurantsArr.map((element, index) =>{
        console.log("questo è name: ", element.name);
        // var p = document.createElement("p");

        console.log("questo è index: ", index);

        objectSelected = index;

        // document.querySelector(".restaurantsContainer").append(element.name, p);

        document.querySelector(".restaurantsContainer").innerHTML += `
        <div onclick="goToSelectedRestaurant()">
            <div class="imageContainer">
                <img alt="restuarant image" src="../img/${element.image}.jpg">
            </div>
            <h2>${element.name}</h2>
            <p>Tipo di Cucina: ${element.type}</p>
            <p>Ordine minimo: ${element.minOrder}</p>
            <p>Costo della consegna: ${element.delCost}</p>
            <p>Tempo di consegna: ${element.delTime}</p>
            <p>Distanza: ${element.distance}</p>
        </div>
        `;
    });

}

const disNone = () =>{};

const goToSelectedRestaurant = () =>{
    window.location= "file:///Users/cristian.valencia/Desktop/DeliveryFood/listaRistoranti/selectedRestaurant.html";
    console.log("si siamo qui")
};