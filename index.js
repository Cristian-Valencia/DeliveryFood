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

    setInterval(slider,3000);

    


};