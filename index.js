window.onload=function()
{

    const burgerMenuBtn = document.querySelector(".burgerMenuContainer");

    burgerMenuBtn.addEventListener("click", ()=>{

        document.querySelector(".listContainer").style.display = "inline-block";

        document.querySelector(".listContainer").classList.toggle("showListContainer");

        document.querySelector(".one").classList.toggle("oneX");

        document.querySelector(".two").classList.toggle("twoX");

        document.querySelector(".three").classList.toggle("threeX");

    });

    


};