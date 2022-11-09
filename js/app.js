'use strict';

function max(a, b){

    if(a > b){
        return a;
    }
    else{
        return b;
    }
}

console.log("The max Number is " + max(10,20));

function maxOfThree(a, b, c){
    if(a>b && a>c){
        return a;
    }else if(b>a && b>c){
        return b;
    }else{
        return c;
    }
}
console.log("The max Number from these three number is " + maxOfThree(10,5,15));

function isVowel(v){

    if(v.toLowerCase() == "a" || v.toLowerCase() == "e" || v.toLowerCase() == "i" || v.toLowerCase() == "o" || v.toLowerCase() == "u"){
        return true;
    }

    return false;
}

console.log("The given character is vowel: " + isVowel('A'));

const arr1 = [1,2,3,4];
function sum(arr){
    let sum =0;
    for(let i=0; i<arr1.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
function multiply(arr){
    let mul =1;
    for(let i=0; i<arr1.length; i++){
        mul = mul * arr[i];
    }
    return mul;
}

console.log("The sum of arr1 is " + sum(arr1) + " The multiplication of arr1 is " + multiply(arr1));


function reverse(w){
    let rev = "";
    for(let i=w.length; i>=0 ; i--){
     rev = rev + w.charAt(i);
    }
    return rev;
}
console.log("The reverse of given character is: " + reverse('sameer'));

const array2 = ["sameer","ram","hari"];
function findLongestWord(arr){
    let longWord = "";
    for(let i=0; i<arr.length;i++){
        if(arr[i].length > longWord.length){
            longWord = arr[i];
        }
    }

    return longWord;
}

console.log("The longest word in array is: " + findLongestWord(array2));

function filterLongWord(arr, len){
    //let longWord = "";
    let temparr = [];
    let j=0;
    for(let i=0; i<arr.length;i++){
        if(arr[i].length > len){
            temparr[j] = arr[i];
            j++;
        }
    }

    return temparr;
}

console.log("The filter word in array is: " + filterLongWord(array2, 3));

const array3 = [1,2,3];
function computeSumOfSquares(arr){
    let sum = arr.reduce(function(accum, curr){
        return accum + curr * curr;
    });
    return sum;
}

console.log("The sum of power of array is: " + computeSumOfSquares(array3));

function printOddNumbersOnly(arr){
    let odd = arr.filter(function(n){
        
       return n % 2 != 0;
    });
    return odd;
}

console.log("The odd numbers are  : " + printOddNumbersOnly(array3));

function computeSumOfSquareOfEvensOnly(arr){
     let sum = 0;
     for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 == 0){
            sum += Math.pow(arr[i],2);
          
        }
     }
     return sum;
  
}

console.log("The sum of square of even numbers are: " + computeSumOfSquareOfEvensOnly(array3));


function sumFunc(arr){
    let sum = arr.reduce(function(accum,curr){
        return accum + curr;
    });
    return sum;
}
function multiplyFunc(arr){
    let mul = arr.reduce(function(accum, curr){
        return accum * curr;
    });
    return mul;
}

console.log("The sum of arr1 using functional style is " + sumFunc(arr1) + " The multiplication of arr1 using functional style is " + multiplyFunc(arr1));

const array4 = [5,2,4,3];
function findSecondBiggest(arr){
   let biggest = 0;
   for(let i=0; i<arr.length; i++){
     if(arr[i]>biggest){
        biggest = arr[i];
     }
   }

   let secondBiggest = 0;
   for(let j=0; j<arr.length; j++){
     if(arr[j] == biggest) continue;
     if(arr[j]>secondBiggest){
        secondBiggest = arr[j];
     }
   }

   return secondBiggest;
}

console.log("Second Biggest in array4 is: " + findSecondBiggest(array4));

function printFibo(n,a,b){
    let fibo = '';
    let temp;
    for(let i=1; i<=n; i++){
        if(i==n){
            fibo +=  a 
        }else{
            fibo +=  a + "," ;
        }
      
        temp = a + b;
        a = b;
        b = temp; 
    }
    return fibo;
}

console.log("The fibonnaci series is : " + printFibo(2,0,1));