var addressFrom = localStorage.getItem("addressFrom");



window.onload=function()
{   

    const burgerMenuBtn = document.querySelector(".burgerMenuContainer");
    const blankMenu = document.querySelector(".blankSpaceMenu");
    const lContainer = document.querySelector(".listContainer");
    const localAddress = document.querySelector(".geoPosition");
    // var objectSelected;

    

    localAddress.innerHTML = `${addressFrom}`;


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

    loginBtn.addEventListener("click", () =>{

        accedi.classList.toggle("accediContainerShow");

        space.classList.toggle("blankSpaceShow");

        blankMenu.classList.remove("blankSpaceMenuShow");

    });

    loginBtnDesk.addEventListener("click", () =>{

        accedi.classList.toggle("accediContainerShow");

        space.classList.toggle("blankSpaceShow");

        

    })


    restaurantsArr.map((element, index) =>{
        console.log("questo è name: ", element.name);

        console.log("questo è index: ", index);

        objectSelected = index;

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