"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
}
const itDepartment = new ITDepartment(123, ['Anna']);
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }
    set mostRecentReport(text) {
        if (!text) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReports(text);
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment(123, ['Report 1']);
        return this.instance;
    }
    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    addReports(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const accountingDepartment = AccountingDepartment.getInstance();
accountingDepartment.addReports('Report 2');
accountingDepartment.printReports();
accountingDepartment.mostRecentReport = 'Report 3';
console.log(accountingDepartment.mostRecentReport);
accountingDepartment.addEmployee('Max');
accountingDepartment.addEmployee('Manu');
const employee1 = Department.createEmployee('Max');
console.log(employee1);
console.log(Department.fiscalYear);
