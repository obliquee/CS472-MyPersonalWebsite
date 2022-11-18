
"use strict";

import { person } from "./person.js";

export class Employee extends person{
    constructor(name, dateOfBirth, salary, hireDate){
        super(name, dateOfBirth);
        this.salary = salary;
        this.hireDate = hireDate;
    }

    doJob(jobTitle){
        console.log(`${this.name} is a ${jobTitle} who earns $${this.salary}`);
    }
}