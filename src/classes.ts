abstract class Department {
  static fiscalYear = 2020;
  protected employees: string[] = [];

  constructor(protected readonly id: number, private name: string) {}

  abstract describe(this: Department): void;

  static createEmployee(name: string) {
    return { name: name };
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

/* const accounting = new Department(123, 'Accounting');
accounting.describe();

accounting.addEmployee('Max');
accounting.addEmployee('Manu'); */

/* accounting.employees[2] = 'Anna'; */ // error can not assign to private property

/* accounting.printEmployeeInformation(); */

/* const accountingCopy = { name: 's', describe: accounting.describe };
accountingCopy.describe(); */

class ITDepartment extends Department {
  constructor(id: number, public admins: string[]) {
    super(id, 'IT');
  }
  describe(this: ITDepartment) {
    console.log('IT Department - ID: ' + this.id);
  }
}

const itDepartment = new ITDepartment(123, ['Anna']);

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found');
  }

  set mostRecentReport(text: string) {
    if (!text) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReports(text);
  }

  private constructor(id: number, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment(123, ['Report 1']);
    return this.instance;
  }

  describe(this: AccountingDepartment) {
    console.log('Accounting Department - ID: ' + this.id);
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name); // can not reach private property, change to protected
  }

  addReports(text: string) {
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
