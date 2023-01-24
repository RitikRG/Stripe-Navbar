const productsLink = document.getElementById("productsLink");
let productsPopUp = document.getElementById("productsPopUp");
let solutionPopUp = document.getElementById("solutionPopUp");
let developerPopUp = document.getElementById("developerPopUp");
let resourcePopUp = document.getElementById("resourcePopUp");
let productPopUpStatus = false;


const openPopUp=()=>{
    productsPopUp.classList.remove("popUpInit");
    productsPopUp.classList.remove("popUpClose");
    solutionPopUp.classList.add("popUpInit");
    developerPopUp.classList.add("popUpInit");
    resourcePopUp.classList.add("popUpInit");
    productsPopUp.classList.add("popUpOpen");
}

productsPopUp.addEventListener('mouseover', function(){productPopUpStatus=true});
productsPopUp.addEventListener('mouseleave', function(){productPopUpStatus=false; closePopUp();});

const closePopUp=()=>{
    setTimeout(function(){
        if(!solutionPopUpStatus&&!productPopUpStatus&&!developerPopUpStatus&&!resourcePopUpStatus){
            productsPopUp.classList.remove("popUpOpen");
            productsPopUp.classList.add("popUpClose");
        }
    },300)
    
    
}

productsLink.addEventListener('mouseover', openPopUp);
productsLink.addEventListener('mouseleave', closePopUp);