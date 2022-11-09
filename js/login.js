"use strict";
window.onload = function(){

   function showInputField(){
      const userName = document.getElementById("emailAddress").value;
      console.log("UserName : " + userName);
      const userPassword = document.getElementById("userpassword").value;
      console.log("Password : " + userPassword);
      const websiteUrl = document.getElementById("websiteUrl").value;
      console.log("Website Url : " + websiteUrl);
   
   }

   const submitBtn = document.getElementById("submit");
   submitBtn.addEventListener("click", showInputField);

   
   
  
}
 
 
 