var test = localStorage.getItem("cristian");

window.onload=function()
{   

    const burgerMenuBtn = document.querySelector(".burgerMenuContainer");
    const blankMenu = document.querySelector(".blankSpaceMenu");
    const lContainer = document.querySelector(".listContainer");
    const testLocal = document.querySelector(".testAddress")

    console.log("questo display è: ", blankMenu.style.display);

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
        }

    });

    testLocal.innerHTML= test;




}