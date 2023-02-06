 
/* HW -21-22-23 */

import { employeeConfig } from "../config/employee-config.js";
import { getRandomNumber } from "../utils/random.js";

// Employe structure and function createEmployee() taken from previous HW
export function createEmployee(name, birthYear, salary, city, country) {
  
   const id = getRandomNumber(employeeConfig.minId, employeeConfig.maxId);
    return {id, name, birthYear, salary, address: {city, country}};
}
export class Company {
    #employees //object key: <id value>, value: reference to Employee object
    constructor() {
        this.#employees = {};
    }
    addEmployee(empl) {
       
        let res = "";
        if ((empl.birthYear > employeeConfig.maxYear) || (empl.birthYear < employeeConfig.minYear)) {
            res += "Invalid birthYear ";
        }

        if ((empl.salary < employeeConfig.minSalary) || (empl.salary > employeeConfig.maxSalary)) {
            res += "Invalid salary ";
        }

        if (this.#employees[empl.id] || empl.id<employeeConfig.minId || empl.id>employeeConfig.maxId ) {
            res += "Invalid Id ";
        }

        if (res != "")
            return res;

        this.#employees[empl.id] = empl;
        return res;
    }

    removeEmployee(id) {
        //removes employee with a given id from #employees object
        //returns true if removed
        //returns false if employee with the id doesn't exist
        let res = false;
        if (this.#employees[id]) {
            res = true;
            delete this.#employees[id]
        }
    }
    getEmployeesCountry(country) {
        //returns array of employee objects having field "country" equaled to a given country
        return Object.values(this.#employees)
        .filter(empl => empl.address.country === country);
    }
    getEmployeesByAge(age) {
        
        const currentYear = new Date().getFullYear();
        return Object.values(this.#employees)
        .filter(empl => currentYear - empl.birthYear === age);
    }
    getEmployeesBySalaries(salaryFrom, salaryTo) {
        //returns array of employee objects with salary in a given closed range [salaryFrom, salaryTo]
        //if salaryFrom < 0, then get employees with salary less or equal salaryTo
        //if salaryTo < 0, then get employees with salary greater or equal salaryFrom
        //if salaryFrom < 0 && salaryTo < 0, then get all employees
        if (salaryTo < 0) {
            salaryTo = Number.MAX_VALUE
        }
        return Object.values(this.#employees)
        .filter(empl => empl.salary >= salaryFrom && empl.salary <= salaryTo);

    }
    getAllEmployees() {
        return Object.values(this.#employees);
    }
}