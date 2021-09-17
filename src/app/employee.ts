

export class Employee{
    name:string;
    id:number;
    address:EmpAddress = {} as EmpAddress;
    empSalaries:EmpSalaries[] = []
}

export class EmpAddress {

street:string;
city:string;
state:string

}

export class EmpSalaries{
    empName:string;
    empId:number;
    empPay:number
}