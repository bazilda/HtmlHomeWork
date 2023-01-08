// console.log("hello word!");
//let a=10;
//let b=20;
//let c=a + b;
//let num=3 / 2;
//console.log(num);
function getRandomNumber(min, max){
  //  min = Math.trunc(min);
  //  max = Math.trunc(max);
    return min + Math.trunc(Math.random() * (max - min + 1));
}
for ( let i = 0; i < 10; i++){
    console.log(getRandomNumber(10, 100))
}
function  getRandomMatrix(rows, columns, min, max){
    const matrix = [];
    for(let i = 0; i <rows; i++){
        matrix.push([]);
        for(let j = 0; j < columns; j++)
        matrix[i].push(getRandomNumber(min,max))
    }
    return matrix;
}
const matrix = getRandomMatrix(3,4,0,1);
const ar10 = [1,2,3,4,5];
const str = ar10.join()


for(let i = 0; i <rows; i++){
    matrix.push([]);
    for(let j = 0; j < columns; j++)
    matrix[i].push(getRandomNumber(min,max))
}
return matrix;

for(let i = 0; i <rows; i++){
    matrix.push([]);
    for(let j = 0; j < columns; j++)
    matrix[i].push(getRandomNumber(min,max))
}
return matrix;



// lecture 14
const array = [10,20,30,-10,11,100];
array.splice(2,2);
console.log(3<4<5 == false)
const index = array.indexOf(30);
//removing all numbers from 30
//
//insert
array.splice(index,0,-10,-20)
array.splice(index,1)
//