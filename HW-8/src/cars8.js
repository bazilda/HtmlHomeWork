const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const anchorElements = document.querySelectorAll(".thumbnails-anchor");
function setDetails(anchor){  /* ???????*/
    detailsImage.src = anchor.getAttribute("data-details-image");
    detailsTitle.innerHTML = anchor.getAttribute("data-details-title");
}

for(let i = 0; i < anchorElements.length; i++){
    anchorElements[i].addEventListener("click",function(){
        setDetails(anchorElements[i]);
    })
}



