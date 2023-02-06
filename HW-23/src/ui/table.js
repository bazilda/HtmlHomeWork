
export class Table {
    //data.id
    //data[obj.fieldName]
    #schema ;//array of objects {columnName: <string>, fieldName: <string>}
    #tableName;
    #tbodyElement;
    
    constructor (tableName, schema)  {
        this.#schema = schema;
        this.#tableName = tableName;
    }

    setParent(parentId) {
        const parentElement = document.getElementById(parentId);
        if (!parentElement) {
            throw `wrong parentId ${parentId}`;
        }
       parentElement.innerHTML = ` <h3 class="table-logo">${this.#tableName} </h3>
        <table  >
            <thead>
                <tr>
                    ${getHeader(this.#schema)}                    
                </tr>
            </thead>
            <tbody id="${this.#tableName}">
               
            </tbody>
        </table>`;
        this.#tbodyElement = document.getElementById(this.#tableName);
    }
    addRow(object){
        this.#tbodyElement.innerHTML += getRow(object, this.#schema);
    }
    
}
function getHeader(schema) {
    return schema.map(obj => `<th>${obj.columnName}</th>`).join('');
}
function getRow(data, schema) {
    return `<tr> ${getTds(data, schema)} </tr>`;
}
function getTds(data, schema) {
    return schema.map(obj => `<td>${data[obj.fieldName]}</td>`).join('');
}
const TableSecsh=document.querySelector("table-section");
