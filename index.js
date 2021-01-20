window.onload=function()
{   

    const burgerMenuBtn = document.querySelector(".burgerMenuContainer");

    burgerMenuBtn.addEventListener("click", ()=>{

        document.querySelector(".listContainer").style.display = "inline-block";

        document.querySelector(".listContainer").classList.toggle("showListContainer");

        document.querySelector(".one").classList.toggle("oneX");

        document.querySelector(".two").classList.toggle("twoX");

        document.querySelector(".three").classList.toggle("threeX");

        document.querySelector(".headerText").classList.toggle("headerTextDown")

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

    loginBtn.addEventListener("click", () =>{

        accedi.classList.toggle("accediContainerShow");

        space.classList.toggle("blankSpaceShow");

    });

    loginBtnDesk.addEventListener("click", () =>{

        accedi.classList.toggle("accediContainerShow");

        space.classList.toggle("blankSpaceShow");

    })

    space.addEventListener("click", () =>{

        accedi.classList.remove("accediContainerShow");

        space.classList.remove("blankSpaceShow");

    })


};