import { employeeConfig } from "./config/employee-config.js";
import { Company, createEmployee } from "./service/company.js";
import { EmployeeForm } from "./ui/employee-form.js";
import { Table } from "./ui/table.js";
import {  MySheets } from "./ui/add-show.js";


const schema = [
    {columnName: 'Employee ID', fieldName: 'id'},
    {columnName: 'Name', fieldName: 'name'},
    {columnName: "Birth Year", fieldName: 'birthYear'},
    {columnName: "Salary (NIS)", fieldName: 'salary'},
    {columnName: "Country", fieldName: 'country'},
    {columnName: "City", fieldName: 'city'}
]
const company = new Company();
const tableEmployees= new Table("Employees", schema);
const employeeForm=new EmployeeForm();
const arraySheets=[
    {Caption:"Add Employee", data:employeeForm},
    {Caption:"Show all employes", data:tableEmployees}
];

const mySheets= new MySheets("all-sheets-sections",arraySheets);

function addEmployee(employeeData) {
        const employee = createEmployee( employeeData.name,
        +employeeData.birthYear, +employeeData.salary,
        employeeData.city, employeeData.country);
   const msg= company.addEmployee(employee);
    return msg;
}

employeeForm.addFormHandler(addEmployee);
