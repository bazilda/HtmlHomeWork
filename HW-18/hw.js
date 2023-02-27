////const employee1 = {id: 123, name: "Vasya", birthYear: 2000, 
//salary: 15000, address: {city: "Lod", country: "Israel"}};
//const employee2 = {id: 123, name: "Vasya", birthYear: 2000, 
//salary: 15000, address: {city: "Lod", country: "Israel"}};
//console.log(`employee1==employee2 is ${employee1 == employee2}`)
//const employee3 = employee1;
//console.log(`employee3==employee1 is ${employee3 == employee1}`)
//employee3.salary = 20000;
//console.log(`employee1 salary = ${employee1.salary} `)

function createEmployee(id, name, birthYear, salary, city, country) {
    return {id, name, birthYear, salary, address: {city, country}}
}
const employees = [
    createEmployee(123, "Vasya", 2000, 15000, "Lod", "Israel"),
    createEmployee(124, "David", 1975, 15500, "Tel Aviv", "Israel"),
    createEmployee(125, "Sara", 1985, 20000, "New York", "USA"),
    createEmployee(126, "Abraham", 1990, 13000, "London", "UK"),
    createEmployee(127, "Moshe", 2000, 15000, "Rehovot", "Israel"),
    createEmployee(128, "Goga", 1993, 10000, "Tbilisi", "Gorgia"),
    createEmployee(129, "Sasha", 2000, 25000, "Ramat Gan", "Israel"),
    createEmployee(130, "Victor", 2003, 10000, "Arad", "Israel")
]
// //const index = employees.indexOf(createEmployee(126, "Abraham", 1990, 13000, "London", "UK"))
// const index = employees.findIndex(function(empl) {
//     return empl.id === 126;
// })
// const employee = employees.find(function(empl) {
//     return empl.id === 126;
// })
//HW #18

//   1.   returns reference to an Employee object with a given id value
function getEmployee(arEmployees, id) {
    const index = arEmployees.findIndex(function(curEmpl){
        return (curEmpl.id == id);
    });
    if (index < 0)
        return; 
    else
        return arEmployees[index];
}

let id = 131;
let empl = getEmployee(employees, id);
if (empl == undefined)
    console.log(`employee with id ${id} does not exist`);
else
    console.log(`employee found. id=${id} name=${empl.name}`);


  //  2.  returns array of Employee objects that have salary in [salaryFrom, salaryTo]
function getEmployeesBySalary(arEmployees, salaryFrom, salaryTo) {
    //new array
    const arRefEmployees = arEmployees.filter(function(curEmpl){
        return (curEmpl.salary>=salaryFrom && curEmpl.salary<=salaryTo);
    });
    return arRefEmployees;
}

let arBySalary=getEmployeesBySalary(employees, 15000, 25000);
console.log(`numEmplSalary=${arBySalary.length}`);


 //   3.    returns array of Employee objects from a given city

function getEmployeesByCity(arEmployees, city) {   
    let arEmployeesByCity = arEmployees.filter(function(curEmpl){
        return(curEmpl.address.city==city);
    });

    return arEmployeesByCity;
}

let arByCity=getEmployeesByCity(employees, "Tbilisi");
console.log(`numEmplByCity=${arByCity.length}`);


//  4.   returns array of all Employee names
function getEmployeeNames(employees) {
    let  arName = employees.map(function(curEmpl){
        return curEmpl.name;
    })
    return arName;
}
console.log ("Names count=" + getEmployeeNames(employees).length);
console.log ("Name of the first is " + getEmployeeNames(employees)[0]);

 //   5.   return array of Employee objects sorted by age in ascending order
function sortEmployeesByAge(array) {
    let arSortedByAge = array.sort(function(el1,el2){
        return el1.birthYear-el2.birthYear;
    });
    return arSortedByAge;
}

let arSorted = sortEmployeesByAge(employees);
arSorted.forEach(function(curEl){
    console.log(curEl.name + " " + curEl.birthYear);
});

 //  6.  computes and returns total salary for all Employee objects
function computeSalaryBudget(employees) {

    const sum = employees.reduce(function(total,curEmpl){
        return total + curEmpl.salary;
   }, 0);
    return sum;
}
console.log(computeSalaryBudget(employees));

function rehovotWithMaxId( (array.filter()){
    const res = array.reduce(function(res,cur){
        return res>cur.id?res:cur.id;
       
  });
return res;
}
console.log (`result max array=[123,9,88,4,-7,100,7,-88,] is ${getMax(array) }` );

}
