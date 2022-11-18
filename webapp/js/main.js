"use strict";

import { person } from "./model/person.js";
import { Employee } from "./model/employee.js";

const persons = [
    new person("Anna Smith", "1998-12-15"),
    new person("Bob Jones", "1945-11-16"),
    new person("Carlos Slim Helu", "1976-09-24"),
];
persons.forEach(a => console.log(a.toString()));

const employee = new Employee("Jim Hanson", null,"245,990.00",null);
employee.doJob("Software Engineer");
