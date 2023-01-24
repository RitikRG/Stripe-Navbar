const solutionLink = document.getElementById("solutionLink");
productsPopUp = document.getElementById("productsPopUp");
solutionPopUp = document.getElementById("solutionPopUp");
developerPopUp = document.getElementById("developerPopUp");
resourcePopUp = document.getElementById("resourcePopUp");
let solutionPopUpStatus = false;


const openSolutionPopUp=()=>{
    solutionPopUp.classList.remove("popUpInit");
    solutionPopUp.classList.remove("popUpClose");
    productsPopUp.classList.add("popUpInit");
    developerPopUp.classList.add("popUpInit");
    resourcePopUp.classList.add("popUpInit");
    solutionPopUp.classList.add("popUpOpen");
}

solutionPopUp.addEventListener('mouseover', function(){solutionPopUpStatus=true});
solutionPopUp.addEventListener('mouseleave', function(){solutionPopUpStatus=false; closeSolutionPopUp();});

const closeSolutionPopUp=()=>{
    setTimeout(function(){
        if(!solutionPopUpStatus&&!productPopUpStatus&&!developerPopUpStatus&&!resourcePopUpStatus){
            solutionPopUp.classList.remove("popUpOpen");
            solutionPopUp.classList.add("popUpClose");
        }
    },300)
    
    
}

solutionLink.addEventListener('mouseover', openSolutionPopUp);
solutionLink.addEventListener('mouseleave', closeSolutionPopUp);