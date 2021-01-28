window.onload=function()
{   

    const burgerMenuBtn = document.querySelector(".burgerMenuContainer");
    const blankMenu = document.querySelector(".blankSpaceMenu")

    burgerMenuBtn.addEventListener("click", ()=>{

        document.querySelector(".listContainer").style.display = "inline-block";

        document.querySelector(".listContainer").classList.toggle("showListContainer");

        document.querySelector(".one").classList.toggle("oneX");

        document.querySelector(".two").classList.toggle("twoX");

        document.querySelector(".three").classList.toggle("threeX");

        document.querySelector(".headerText").classList.toggle("headerTextDown");

        blankMenu.classList.toggle("blankSpaceMenuShow");


    });

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

    // vogliamo che quando qualcuno si registra i parametri vengono salvati dentro un oggetto!

    // let savedMail ="";

    // mail.addEventListener("change", (event) =>{

    //     savedMail = event.target.value;

    //     console.log(savedMail);

    //     document.querySelector(".test").innerHTML = savedMail;

    // });

    

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
        loginBtn.remove();
        document.querySelector(".welcomeMobile").innerHTML += "<a href=#>Benvenuto " + user.userName + "<a/>";

        const linkDesktop = document.querySelector(".linkLogDesktop");
        linkDesktop.remove();
        document.querySelector(".welcomePlace").innerHTML += "<a href=#>Benvenuto " + user.userName + "<a/>";
    });
    
    returnLogin.addEventListener("click", () =>{

        accedi.classList.add("accediContainerShow");

        registration.classList.remove("registrazioneContainerShow");
    })

    const mailLogInput = document.querySelector(".logMail");
    const passLogInput = document.querySelector(".logPass");
    const buttonLog = document.querySelector(".logBtn");

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


    navigator.geolocation.getCurrentPosition(position);

    var la,lo;

    function position(pos){
        la = pos.coords.latitude;
        lo = pos.coords.longitude;

        console.log(la);

        console.log(lo);

        initMap();

        var marker = new google.maps.Marker(
            {
            position: {lat: la, lng: lo},
            map: map
        }); 
    };

    

    var map;

    function initMap() {

   

        

        map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: la, lng: lo },
          zoom: 15,
        });
      }

      


    

};

