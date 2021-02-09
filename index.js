var via, citta, cap, civico, address;
var addressTest;

window.onload=function()
{   

    

    geolocate();

    const burgerMenuBtn = document.querySelector(".burgerMenuContainer");
    const blankMenu = document.querySelector(".blankSpaceMenu");
    const lContainer = document.querySelector(".listContainer");

    burgerMenuBtn.addEventListener("click", ()=>{

        document.querySelector(".listContainer").style.display = "inline-block";

        document.querySelector(".listContainer").classList.toggle("showListContainer");

        document.querySelector(".one").classList.toggle("oneX");

        document.querySelector(".two").classList.toggle("twoX");

        document.querySelector(".three").classList.toggle("threeX");

        document.querySelector(".headerText").classList.toggle("headerTextDown");

        if(lContainer.classList.contains("showListContainer")){
            blankMenu.style.display = "block";
        } else{
            blankMenu.style.display = "none";
        }

        


    });

    blankMenu.addEventListener("click", ()=>{

        blankMenu.style.display="none";

        document.querySelector(".listContainer").classList.remove("showListContainer");

        document.querySelector(".one").classList.remove("oneX");

        document.querySelector(".two").classList.remove("twoX");

        document.querySelector(".three").classList.remove("threeX");

        document.querySelector(".headerText").classList.remove("headerTextDown");
    })

    const slider = () => {
    
        //console.log(document.querySelector(".spostati"))
        
        if(document.querySelector(".fadeOut")!=null)
        {
            document
                .querySelector(".fadeOut")
                .classList
                .remove("fadeOut");            
        }

        
        
        const imgVisibile=document
            .querySelector(".carouselContainer .visible")
    
      //  console.log(imgVisibile)
      //  console.log(imgVisibile.nextElementSibling)

            imgVisibile.classList.remove("visible");
            imgVisibile.classList.add("fadeOut");
    
        
        
        
        if(imgVisibile.nextElementSibling!=null)
        {
            imgVisibile
                .nextElementSibling
                .classList.add("visible");
        }
        else{
            //var genitore=imgVisibile.parentElement;
            //genitore.children[0].classList.add("visibile");
            
            document
                .querySelector(".carouselContainer img:nth-of-type(1)")
                .classList.add("visible")
            
        }

        
        
    }

    const sliderDesktop = () => {
    
        //console.log(document.querySelector(".spostati"))
        
        if(document.querySelector(".fadeOutDesktop")!=null)
        {
            document
                .querySelector(".fadeOutDesktop")
                .classList
                .remove("fadeOutDesktop");            
        }

        
        
        const imgVisibileDesktop=document
            .querySelector(".carouselContainerDesktop .visibleDesktop")
    
      //  console.log(imgVisibile)
      //  console.log(imgVisibile.nextElementSibling)

            imgVisibileDesktop.classList.remove("visibleDesktop");
            imgVisibileDesktop.classList.add("fadeOutDesktop");
    
        
        
        
        if(imgVisibileDesktop.nextElementSibling!=null)
        {
            imgVisibileDesktop
                .nextElementSibling
                .classList.add("visibleDesktop");
        }
        else{
            //var genitore=imgVisibile.parentElement;
            //genitore.children[0].classList.add("visibile");
            
            document
                .querySelector(".carouselContainerDesktop div:nth-of-type(1)")
                .classList.add("visibleDesktop")
            
        }

        
        
    }

    const containerMobile = document.querySelector(".carouselContainer");
    const containerDesktop = document.querySelector(".carouselContainerDesktop");
    const containerMobileD = window.getComputedStyle(containerMobile, null).display;
    const containerDesktopD = window.getComputedStyle(containerDesktop, null).display;
    const sliderMobile = setInterval(slider,3000);
    const sliderForDesktop = setInterval(sliderDesktop, 3000);

    if(containerMobileD == "block"){
        clearInterval(sliderForDesktop);
    } else{
        setInterval(slider,3000)
    }

    if(containerDesktopD == "block"){
        clearInterval(sliderMobile);
    } else{
        setInterval(sliderDesktop,3000)
    }

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
    const searchBtn = document.querySelector(".search");
    const loadedMap =document.getElementById("loadMap");
    const civicoInput = document.querySelector(".number");
    var numCiv;
    const savedAddress = address;
    const testAddress = document.querySelector(".testAddress");
    const confirmAddress = document.querySelector("#conferma");
    const logOut = document.querySelector(".linkLogOut");
    const logOutDesk = document.querySelector(".logOutLinkDesktop");


    console.log("questo è addressTest fuori: ", addressTest)

    



    loginBtn.addEventListener("click", () =>{

        accedi.classList.toggle("accediContainerShow");

        space.classList.toggle("blankSpaceShow");

        blankMenu.style.display ="none";

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
        document.querySelector(".logOutLink").style.display="block";
        // 
        const linkDesktop = document.querySelector(".linkLogDesktop");
        linkDesktop.remove();
        document.querySelector(".welcomePlace").innerHTML += `<a href=# class="linkDes">Benvenuto ${user.userName}<a/>`;
        document.querySelector(".logOutLinkDesktop").style.display="block";
    });
    
    returnLogin.addEventListener("click", () =>{

        accedi.classList.add("accediContainerShow");

        registration.classList.remove("registrazioneContainerShow");
    })


    if(logOut){
        logOut.addEventListener("click",()=>{
            document.querySelector(".welcomeMobileName").remove("linkLogName");
            document.querySelector(".welcomeMobile").style.display="block";
            document.querySelector(".logOutLink").remove("linkLogOut");

            
        });
    }

    if(logOutDesk){
        logOutDesk.addEventListener("click", ()=>{
            document.querySelector(".linkDes").remove();
            document.querySelector(".welcomePlace").innerHTML += `<a href="#" class="linkLogDesktop">Login/Registrazione</a>`;
            document.querySelector(".logOutDesktop").remove("logOutLinkDesktop");
        })
    }
    



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

    passLogInput.addEventListener("change", (event) => {
        const lengthTwo = passLogInput.getAttribute("data-min");
        
        if(event.target.value.length >= lengthTwo){
            passLogInput.classList.add("ok");
            passLogInput.classList.remove("error");
        } else{
            passLogInput.classList.add("error");
            passLogInput.classList.remove("ok");
        }

        if(passLogInput.classList.contains("ok") && mailLogInput.classList.contains("ok")){
            buttonLog.style.opacity = "1"
        }
    });

    // API Google Maps
    
    civicoInput.addEventListener("blur", (e)=>{

        numCiv = e.target.value;

        civico = e.target.value;

        console.log("test num civ: ", numCiv);

        fillInAddress(civico);
    });
    

    searchBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        loadedMap.style.display="block";
        localStorage.setItem("addressFrom", `Ristoranti vicino a ${address}:`);

        console.log("cosa succede: ", address);
    });

    confirmAddress.addEventListener("click",() =>{
        window.location = "file:///Users/cristian.valencia/Desktop/DeliveryFood/listaRistoranti/restaurants.html";
    })



};


var autocomplete;



function initAutocomplete(){
    autocomplete = new google.maps.places.Autocomplete(
    (document.getElementById("indirizzo")),
    {types: ['address']}
    );  
    autocomplete.addListener('place_changed', fillInAddress);
}


// function initAutocomplete(){
//     autocomplete = new google.maps.places.Autocomplete(
//       (document.getElementById("indirizzo")),
//       {types: ['address']});  
//       autocomplete.addListener('place_changed', fillInAddress);
//   }

function fillInAddress(civico){ 

    // const capInput = document.querySelector(".number");
    // const cityInput = document.querySelector(".city");
    
    var place = autocomplete.getPlace();      
    console.log(place);    
    via = place.address_components[0].long_name;
    citta = place.address_components[1].long_name;
    console.log(via);  
    console.log(citta);

    // capInput.innerHTML= "ciao";

    address = `${via} ${civico} ${citta}`;

    var addressTest = address;

    // cityInput.innerHTML="Berlino";

    console.log(`questo è l'address ${address}`)

    

    trovaCoords(address); 
              
}


function geolocate(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            function(position){              
                var geolocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            
        document.getElementById("indirizzo").focus();
                  
        var circle = new google.maps.Circle({
            center: geolocation,
            radius: position.coords.accuracy
        });        
                  
        console.log(circle.getBounds());     
        
        initAutocomplete();
        
        // console.log(autocomplete);

        if(autocomplete){
            document.querySelector(".loader").style.display="none";
            document.querySelector(".loaderContainer").style.display="none";
        }
                  
        autocomplete.setBounds(circle.getBounds());

        });
    }
}

function initMap(la,ln) {

    console.log("che cosa è la: " + la);
    console.log("che cosa è lo: " + ln);

    mappa = new google.maps.Map(
        document.getElementById('mappa'), 
            {
                center: {lat: la, lng: ln},
                zoom: 19,
                mapTypeId: 'roadmap'
            }
        );
          
        var marker = new google.maps.Marker(
            {
            position: {lat: la, lng: ln},
            map: mappa
        }); 
          
} //initMap    

    

function trovaCoords(indirizzo){

    var geocoder;

    geocoder = new google.maps.Geocoder();  
      
    geocoder.geocode({'address': indirizzo}, function(results, status) {    
        if (status == google.maps.GeocoderStatus.OK) {
          
            document.getElementById('latlon').value = results[0].geometry.location;
              
            var lat_lon= document.getElementById('latlon').value;   

            var dividiLatLon=lat_lon.split(",") 
              
            var latitudine=parseFloat(dividiLatLon[0].replace("(",""));

            var longitudine=parseFloat(dividiLatLon[1].replace(")","").trim()); 
              
            initMap(latitudine,longitudine);
              
        } else {
             alert('Geocode non ha funzionato per il seguente motivo: ' + status);
          }
        });
      
      }
