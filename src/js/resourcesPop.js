const resourceLink = document.getElementById("resourceLink");
productsPopUp = document.getElementById("productsPopUp");
solutionPopUp = document.getElementById("solutionPopUp");
developerPopUp = document.getElementById("developerPopUp");
resourcePopUp = document.getElementById("resourcePopUp");
let resourcePopUpStatus = false;


const openResourcePopUp=()=>{
    resourcePopUp.classList.remove("popUpInit");
    resourcePopUp.classList.remove("popUpClose");
    productsPopUp.classList.add("popUpInit");
    developerPopUp.classList.add("popUpInit");
    solutionPopUp.classList.add("popUpInit");
    resourcePopUp.classList.add("popUpOpen");
}

resourcePopUp.addEventListener('mouseover', function(){resourcePopUpStatus=true});
resourcePopUp.addEventListener('mouseleave', function(){resourcePopUpStatus=false; closeResourcePopUp();});

const closeResourcePopUp=()=>{
    setTimeout(function(){
        if(!solutionPopUpStatus&&!productPopUpStatus&&!developerPopUpStatus&&!resourcePopUpStatus){
            resourcePopUp.classList.remove("popUpOpen");
            resourcePopUp.classList.add("popUpClose");
        }
    },300)
    
    
}

resourceLink.addEventListener('mouseover', openResourcePopUp);
resourceLink.addEventListener('mouseleave', closeResourcePopUp);