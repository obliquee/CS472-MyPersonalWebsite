"use strict";

//6. Solution
console.log("-----Soln 6----")
const addCounter = (function(){
    let counter = 0;

    const add = function(inc=1){
        counter += inc;
        return counter;
    }

    const reset = function(){
        counter = 0;
        return counter;
    }

    return{
        add: add,
        reset: reset
    }
}) ();

console.log("First Adding the counter " + addCounter.add());
console.log("Second Adding the counter " + addCounter.add());
console.log("Reseting the counter " + addCounter.reset());

//7. The free variable in above number 6 is counter. 
//   Free Variable in context of closure: Is a variable reffered to by a function that is not one of its parameters or local variables

console.log("7) The free variable in above number 6 is counter.Free Variable in context of closure: Is a variable reffered to by a function that is not one of its parameters or local variables");

//8. Solution
console.log("----Soln 8-----");
const addCounter1 = (function(){
    let counter = 0;

    const add = function(){
        counter += 1;
        return counter;
    }

    return{

        value: function(){
            return counter;
        },

        make_adder: function(inc){
            return function add(){
               counter += inc;
            };
          }    
       
    }
}) ();

const call1 = addCounter1.make_adder(5);
call1();
call1();
call1();
console.log("Calling three times the function the final counter is: "+  addCounter1.value());

console.log("---Soln 9---");
console.log(`By making it as Module Pattern, one can remove all names from the Global namespace`);

console.log("----Soln 10-----");
const employee = (function(){

    let name = "";
    let age = 0;
    let salary = 0;

    const setAge= function(newAge){
        age = newAge;
    }

    const setSalary= function(newSalary){
        salary = newSalary;
    }

    const setName = function(newName){
        name = newName;

    }

    const getAge= function(){
        return age;
    }

    const getSalary= function(){
        return salary;
    }

    const getName = function(){
        return name;
    }

    const increaseSalary= function(percentage){
        let salary = getSalary();
        salary = (percentage/100)*salary + salary;
        setSalary(salary);
    }

    const incrementAge = function(incAge){
        let age = getAge();
         age += 1;
         setAge(age);
    }

    const printEmployee = function(){
       console.log("Name is "+name + " Age is "+age + " Salary is "+salary+ " Salary after increment "+salary + " Age after increment " + age);
    }

    return{
        setName: setName,
        setAge: setAge,
        setSalary: setSalary,
        increaseSalary: increaseSalary,
        incrementAge: incrementAge,
        printEmployee: printEmployee
    }

})();

const callEmployee = employee;
callEmployee.setName("Sameer Adhikari");
callEmployee.setAge(16);
callEmployee.setSalary(9000);
callEmployee.increaseSalary(5);
callEmployee.incrementAge();
callEmployee.printEmployee();

console.log("----Soln 11----");
employee.address = "";
employee.getAddress = function(){
    return this.address;
  }
employee.setAddress = function(newAddress){
    this.address = newAddress;
}

employee.setAddress("1000 N 4th street Fairfiel Iowa");
console.log("Address is " + employee.getAddress());


