/**
 * app.js
 */
"use strict";
import {Patient} from "./model/patient.js";

console.log("HCMC Website");
$(document).ready(function() {
    let patientList = [];
    $("form").on("submit", function(event) {
        event.preventDefault();
        console.log("Form submitted", event);
        patientList.push(new Patient(
            $("#patientIdNumber").val(),
            $("#firstName").val(),
            $("#middleInitials").val(),
            $("#lastName").val(),
            $("#dateOfBirth").val(),
            $("#ddlDepartment").val(),
            $("input[type='radio']:checked").val()
        ));
        console.log('patientList', patientList);
        addTableRow(patientList);
        
    });
    $("input[name='chkElderlyPatients']").click(function() {
        if ($("input[name='chkElderlyPatients']").is(":checked") == true) {
            console.log("checked chkElderlyPatients");
            const chkElderlyPatients = patientList.filter(x=> x.isOutpatient === 'No');
            console.log("chkElderlyPatients", chkElderlyPatients);
            // filter the patient list in table 
            // $("#tbodyPatientsList tr").empty();
            // $("#tbodyPatientsList").empty();
            clearTableContent(patientList);
            addTableRow(chkElderlyPatients);
        } else {
            console.log("unchecked chkElderlyPatients");
            $("#tbodyPatientsList tr").empty();
            $("#tbodyPatientsList").empty();
            addTableRow(patientList);
        }
    });

    $("input[name='chkShowOutPatients']").click(function() {
        if ($("input[name='chkShowOutPatients']").is(":checked") == true) {
            console.log("checked chkShowOutPatients");
            const chkShowOutPatients = patientList.filter(x=> x.isOutpatient === 'Yes');
            $("#tbodyPatientsList tr").empty();
            $("#tbodyPatientsList").empty();
            addTableRow(chkElderlyPatients);
        } else {
            console.log("unchecked chkShowOutPatients");
            $("#tbodyPatientsList tr").empty();
            $("#tbodyPatientsList").empty();
            addTableRow(patientList);
        }
    });
    const addTableRow = function(list){
        $('table #tbodyPatientsList').append(`
        <tr>
            <td>${list[list.length-1].patientID}</td>
            <td>${list[list.length-1].firstname}</td>
            <td>${list[list.length-1].middlename}</td>
            <td>${list[list.length-1].lastname}</td>
            <td>${list[list.length-1].dob}</td>
            <td>${list[list.length-1].department}</td>
            <td>${list[list.length-1].isOutpatient}</td>
        </tr>
        `);
    }

    const clearTableContent = (list)=>{
        list.forEach(element => {
            $("#tbodyPatientsList tr").empty();
            $("#tbodyPatientsList").empty();
        });
    }
  
});