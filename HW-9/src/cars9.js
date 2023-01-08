const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const anchorElements = document.querySelectorAll(".thumbnails-anchor");
const mainElement=document.querySelector(".main-class");
const hideButtonElement = document.querySelector("#hide-button");
const HIDDEN="hidden";
function showDetails(){
   mainElement.classList.remove("HIDDEN");
}
function hideDetails(){
    mainElement.classList.add("HIDDEN");
}
function setDetails(x){  /* ???????*/
    detailsImage.src = x.getAttribute("data-details-image");
    detailsTitle.innerHTML = x.getAttribute("data-details-title");
    showDetails();
    const color = x.getAttribute("data-text-color");
    if(color){
        detailsTitle.getElementsByClassName.color=color;
    }
    else{
        detailsTitle.getElementsByClassName.color='';
    }
    }


for(let i = 0; i < anchorElements.length; i++){
    anchorElements[i].addEventListener("click",function(){
        setDetails(anchorElements[i]);
    })
}

hideButtonElement.addEventListener("clic",hideDetails);

