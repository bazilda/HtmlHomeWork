
// export function openPage() { 
//     alert("kuku");
// }


export class  MySheets {

    #sheetSections = [];
    #sheetButtons = [];


    constructor(parentId, arraySheets) {

        const parentSheetElement = document.getElementById(parentId);
        if (!parentSheetElement) {
            throw `wrong parent id ${parentId}`;
        }

        parentSheetElement.innerHTML = `<section class= "mySheets" id="mySheets">`;
 
        let numOfSheets = arraySheets.length;

        // add buttons
        for (let sheetNum = 0; sheetNum < numOfSheets; sheetNum++) {
            let sheetCaption = arraySheets[sheetNum].Caption;
            parentSheetElement.innerHTML += `<button id="sheet-button-${sheetNum}" class="tablink-caption">${sheetCaption}</button> `;
            let btnElement = document.getElementById(`sheet-button-${sheetNum}`);
            btnElement.addEventListener("click", function () { alert("kuku"); });
            this.#sheetButtons[sheetNum] = btnElement;
        }


        let parentMySheets=document.getElementById("mySheets");

        for (let sheetNum = 0; sheetNum < numOfSheets; sheetNum++) {
            parentMySheets.innerHTML += `<section class="tablink-data" id="sheet-section-${sheetNum}"></section>`;
            let sheetObj = arraySheets[sheetNum].data;
            sheetObj.setParent(`sheet-section-${sheetNum}`);

            this.#sheetSections[sheetNum] = document.getElementById(`sheet-section-${sheetNum}`);
        }


        parentSheetElement.innerHTML += `</section>`;
    }

    

}
