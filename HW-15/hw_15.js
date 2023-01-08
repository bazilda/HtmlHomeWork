// task sort.1

const array=[123,9,88,4,-7,100,7,-88,];
function evenOddSort(array){
    array.sort(function(e1,e2){
        if ( e1 % 2 == 0){
            return -1;
        }
       else{
        return 1;
       }
        });
     return array;   
}

console.log (`result of sorting array=[123,9,88,4,-7,100,7,-88,]even odd is ${evenOddSort(array) }` );

/******************************************************** */

//task sort.2


function oddEvenSort(array){
    array.sort(function(e1,e2){
        if ( e1 % 2 != 0){
            return -1;
        }
       else{
        return 1;
       }
        });
     return array;   
}

console.log (`result of sorting array=[123,9,88,4,-7,100,7,-88,] odd is ${oddEvenSort(array) }` );




/********************************************************* */

//task sort.3
  

    function evenAscOddDesc(array){
        array.sort(function(e1,e2)
        {
            if ( e1 % 2 == 0 && e2% 2 == 0){
                return e1-e2;
            }
           else if ( e1 % 2 != 0 && e2 % 2 != 0){
            return e2-e1;
           }
           else if (e1 % 2 == 0){
           return -1;
           }
           else {
            return 1;
           }
            });
         return array;  
        }
   
    console.log (`result of sorting array=[123,9,88,4,-7,100,7,-88,] is ${evenAscOddDesc(array) }` );


 /********************************************************************* */

 //HW reduse.1

function getMin(array){
    const res = array.reduce(function(res,cur){
                return res<cur?res:cur;
               
          });
        return res;
 }
 console.log (`result min array=[123,9,88,4,-7,100,7,-88,] is ${getMin(array) }` );

 /************************************************************************** */

 // reduse.2

function getMax(array){
    
        const res = array.reduce(function(res,cur){
                    return res>cur?res:cur;
                   
              });
            return res;
     }
     console.log (`result max array=[123,9,88,4,-7,100,7,-88,] is ${getMax(array) }` );

 /*********************************************************************************** */

// reduse.3

const array1=[-10,10,45,-45,10];

 function getAverage(array1){
    
    const sum = array1.reduce(function(res,cur){
                 return res + cur;
            });
    return sum/array1.length;
}
console.log (`result Average array=[-10,10,45,-45,10] is ${getAverage(array1) }` );

/**************************************************************************************** */

// reduse.4

const array3=[123,9,88,4,-7,100,7,-88,100];

function getMinMaxAvg(array3) {
    let min = Number.MAX_VALUE;
    let max = -Number.MAX_VALUE;
    const sum = array3.reduce(function (res, cur) {
        min = cur < min ? cur : min;
        max = cur > max ? cur : max;
        return res + cur;
    });

    let avg = sum / array3.length;

    let resArray = Array(min, max, avg);
    return resArray;
}

console.log(` result min max avg for array=[123,9,88,4,-7,100,7,-88,] is ${getMinMaxAvg(array3)}`);



// reduse.3.2

// const array2=[-10,10,45,-45,1];  //[-45,-10,1,10,45]
// function getMedian(array2) {
//     array2.sort(function (e1, e2) {
//         return e1 - e2;
//     });
//     if (array2.length % 2 != 0) {
//         return array2[(array2.length + 1) / 2];
//     }
//     else {
//         return (array2[array2.length / 2] + array2[array2.length / 2 + 1]) / 2;
//     }
// }
// console.log (`result Average array=[-10,10,45,-45,1] is ${getMedian(array2) }` );

/*********************************************************************** */

// reduce
// function sum(array){
//     const res = array.reduce(function(res,cur){
//         return res + cur;
       
//     });
//     return res;
// }
// console.log(`sum([1,2,3,4,5]) returns ${sum([1,2,3,4,5])}`);


// [1,2,3,4].reduse(function(x,y){
//     console.log(x,y)
// });

 
