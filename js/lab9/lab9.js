"use strict";

//Question 1
let person = {

    name:"",
    dateOfBirth:"",

    getName:function(n){
        return this.name;
    },

    setName:function(n){
        this.name = n;
    }

    
};

function createAndPrintName(){
    let personName = Object.create(person);
    personName.setName("John")
    personName.dateOfBirth = "1997-01-31"
    console.log("The person name is " + personName.getName());
    console.log(personName.getName() +" was born on " + personName.dateOfBirth);
};

// Question 2
function createEmployee(){
    let employee = Object.create(person);
    employee.salary = 0;
    employee.hireDate = new Date();

    employee.doJob = function(jobTitle){
        console.log(this.getName() +" is a " + jobTitle + " who earns $" + this.salary );
    };

    let anna = Object.create(employee);
    anna.setName("Anna");
    anna.salary = 249995.50;
    anna.doJob("Programmer");

};

//Question 3
function Person(personName, dateOfBirth){
  this.personName = personName;
  this.dateOfBirth = dateOfBirth;
  this.toString = function(){
    console.log(`{Name ${this.personName}, DateOfBirth: ${this.dateOfBirth}}`);
  }
}


//for running
(function testing(){

    createAndPrintName();
    createEmployee();
    new Person("John", "1998-12-10").toString();
})();