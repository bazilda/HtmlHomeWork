import { employeeConfig } from "./config/employee-config.js";
import { Company, createEmployee } from "./service/company.js";
import { EmployeeForm } from "./ui/employee-form.js";
import { getRandomNumber } from "./utils/random.js";

const company = new Company();
const employeeForm = new EmployeeForm("form-section");

function addEmployee(employeeData) {
    
    const employee = createEmployee( employeeData.name,
        +employeeData.birthYear, +employeeData.salary,
        employeeData.city, employeeData.country);
   const msg= company.addEmployee(employee);
    return msg;
}

employeeForm.addFormHandler(addEmployee);

