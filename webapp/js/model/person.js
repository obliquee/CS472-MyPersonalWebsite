"use strict";

export class person{
    constructor(name, dateOfBirth){
        this.name = name;
        this.dateOfBirth = new Date(dateOfBirth);
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    getDateOfBirth(){
        return this.dateOfBirth;
    }

    setDateOfBirth(dateOfBirth){
        this.dateOfBirth = new Date(dateOfBirth);
    }

    toString(){
        return `{Name: ${this.name}, DateOfBirth: ${this.dateOfBirth.getFullYear()}-${this.dateOfBirth.getMonth()+1} -${this.dateOfBirth.getDate()}}`;
    }
}