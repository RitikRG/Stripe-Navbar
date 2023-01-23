const developerLink = document.getElementById("developerLink");
productsPopUp = document.getElementById("productsPopUp");
solutionPopUp = document.getElementById("solutionPopUp");
developerPopUp = document.getElementById("developerPopUp");
let developerPopUpStatus = false;


const openDeveloperPopUp=()=>{
    developerPopUp.classList.remove("popUpInit");
    developerPopUp.classList.remove("popUpClose");
    productsPopUp.classList.add("popUpInit");
    solutionPopUp.classList.add("popUpInit");
    developerPopUp.classList.add("popUpOpen");
}

developerPopUp.addEventListener('mouseover', function(){developerPopUpStatus=true});
developerPopUp.addEventListener('mouseleave', function(){developerPopUpStatus=false; closeDeveloperPopUp();});

const closeDeveloperPopUp=()=>{
    setTimeout(function(){
        if(!solutionPopUpStatus&&!productPopUpStatus&&!developerPopUpStatus){
            developerPopUp.classList.remove("popUpOpen");
            developerPopUp.classList.add("popUpClose");
        }
    },300)
    
    
}

developerLink.addEventListener('mouseover', openDeveloperPopUp);
developerLink.addEventListener('mouseleave', closeDeveloperPopUp);