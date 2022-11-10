"use strict";
// window.onload = function(){

//    function showInputField(event){
//       const userName = document.getElementById("emailAddress").value;
//       console.log("UserName : " + userName);
//       const userPassword = document.getElementById("userpassword").value;
//       console.log("Password : " + userPassword);
//       const websiteUrl = document.getElementById("websiteUrl").value;
//       console.log("Website Url : " + websiteUrl);

//       event.preventDefault();
   
//    }

//    const submitBtn = document.getElementById("loginForm");
//    submitBtn.addEventListener("submit", showInputField);  

   
// }

window.onload = function(){
   const submitBtn = document.getElementById("loginForm");
   submitBtn.onsubmit = function(event){
      const userName = document.getElementById("emailAddress");
      console.log("UserName : " + userName.value);
      const userPassword = document.getElementById("userpassword");
      console.log("Password : " + userPassword.value);
      const websiteUrl = document.getElementById("websiteUrl");
      console.log("Website Url : " + websiteUrl.value);
      event.preventDefault();
      userName.value = '';
      userPassword.value = '';
      websiteUrl.value = '';
      
   }

};
 
 
 