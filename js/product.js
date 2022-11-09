"use strict";
window.onload = function(){


   function showProductPopup(){

      let productNumber = document.getElementById("productNumber").value;
      let productQuantity = document.getElementById("productQuantity").value;
      let productName = document.getElementById("productName").value;
      let productSupplier = document.getElementById("productSupplier").value;
      let unitPrice = document.getElementById("unitPrice").value;
      let dateSupplied = document.getElementById("dateSupplied").value;
     
      const message = `
         Product Number is: ${productNumber}
         Product Quantity is: ${productQuantity}
         Product Name is: ${productName}
         Product Supplier is: ${productSupplier}
         Product Unit Price is: ${unitPrice}
         Product Supplied Date: ${dateSupplied}
      `;
     
      alert(message);
      
     }

     const productForm = document.getElementById("productForm");
     productForm.addEventListener("submit",showProductPopup);

}






