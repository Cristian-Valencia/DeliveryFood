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

        const containerMobile = document.querySelector(".carouselContainer");
        const containerDesktop = document.querySelector(".carouselContainerDesktop");
        
        const imgVisibile=document
            .querySelector(".carouselContainer .visible")

        const imgDeskVisible = document.querySelector(".carouselContainerDesktop .visible")
    
      //  console.log(imgVisibile)
      //  console.log(imgVisibile.nextElementSibling)

        if(window.getComputedStyle(containerMobile, null).display == block){
            imgVisibile.classList.remove("visible");
            imgVisibile.classList.add("fadeOut");
        } else{
            imgVisibile.classList.remove("visible");
            imgVisibile.classList.remove("fadeOut");
            document.querySelector(".carouselContainer img:nth-of-type(1)").classList.add("visible");
        }

        if(window.getComputedStyle(containerDesktop, null).display == block){
            imgDeskVisible.classList.remove("visible");
            imgDeskVisible.classList.add("fadeOut");
        } else{
            imgDeskVisible.classList.remove("visible");
            imgDeskVisible.classList.remove("fadeOut");
            document.querySelector(".carouselContainerDesktop div:nth-of-type(1)").classList.add("visible");
        }
        
        
        
        
        if(imgVisibile.nextElementSibling!=null || imgDeskVisible.nextElementSibling!=null )
        {
            imgVisibile
                .nextElementSibling
                .classList.add("visible");
                
            imgDeskVisible.nextElementSibling.classList.add("visible")
        }
        else{
            //var genitore=imgVisibile.parentElement;
            //genitore.children[0].classList.add("visibile");
            
            document
                .querySelector(".carouselContainer img:nth-of-type(1)")
                .classList.add("visible")

            document.querySelector(".carouselContainerDesktop div:nth-of-type(1)").classList.add("visible")
            
        }

        
        
    }

    setInterval(slider,3000);

    //questo è il modo per controllare se un tag html ha una classe

    // const test = document.querySelector(".carouselContainerDesktop");

    // if (test.classList.contains('carouselContainerDesktop')) {
    //     console.log("c'è")
    // } else{
    //     console.log("non c'è")
    // }



    //console.log(window.getComputedStyle(test, null).display) "questo è il modo per capire come controllare il display di un tag html"


};