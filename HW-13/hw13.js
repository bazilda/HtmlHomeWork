function printMatrix(matrix)  // the print original matrix
{
    for (let row = 0; row < matrix.length; row++)
    {
        let strRow = "";
        for (let col = 0; col < matrix[0].length; col++)
        {
            strRow += matrix[row][col] + " ";
        }
        console.log(strRow);
    }
}

function getRandomMatrix(rows, columns, min, max) // creation matrix
{
  const matrix = [];
     for(let row=0; row<rows; row++)
     {
        matrix.push([]);
        for (let col=0; col<columns; col++)
        {
            matrix[row].push(min + Math.trunc(Math.random() * (max - min + 1)));
        }
    }
  return matrix;
 }

 function transpMatrix (matrix){  //  transformation matrix
    const newTrMatrix = [];
        for(let row=0; row<matrix[0].length; row++)
        {
            newTrMatrix.push([]);
             for (let col=0; col<matrix.length; col++)
             {
                newTrMatrix[row][col] = matrix[col][row] ;
             }
        }
    return newTrMatrix;
 }

 let matrix = getRandomMatrix(2,3,10,20);
 printMatrix(matrix);
 let traMatrix = transpMatrix(matrix);
 printMatrix(traMatrix);


// html
/*{ <ul class = "list_class">
    < li class="item_class">
        <div class= "white"></div>
    </li>
    < li class="item_class">
        <div class= "white"></div>
    </li>
    < li class="item_class">
        <div class= "white"></div>
    </li>
    < li class="item_class">
        <div class= "black"></div>
    </li>
    < li class="item_class">
        <div class= "white"></div>
    </li>
    < li class="item_class">
        <div class= "white"></div>
    </li>
    < li class="item_class">
        <div class= "white"></div>
    </li>
    < li class="item_class">
        <div class= "white"></div>
    </li>
 </ul> }*/

function getHtmlUl(array)
{
    let html = '<ul class="list_class">';

    for(i=0; i<array.length; i++)
    {
        let strClass = (array[i] === 0? 'white' : 'black');
        let liElement = `\n<li class="item_class"><div class="${strClass}"></div></li> `;
        html += liElement;
    }

    html += '\n</ul>';

    return html;
}

console.log(getHtmlUl([1,0,0,1,1,1,1,0]));


