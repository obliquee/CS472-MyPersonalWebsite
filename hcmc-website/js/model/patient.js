/**
 * patient.js
 */
"use strict";

export class Patient{
    constructor(patientID, firstname, middlename, lastname, dob, department, isOutpatient) {
        this.patientID = patientID;
        this.firstname = firstname;
        this.middlename = middlename;
        this.lastname = lastname;
        this.dob = dob;
        this.department = department;
        this.isOutpatient = isOutpatient;
    }
}

