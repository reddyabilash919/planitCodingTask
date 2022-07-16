/* Task 2(A) : Get the nth number in the fibonacci sequence given n */

function fib(n,memObj={}){
    // check if the number already present in memory object
    if( n in memObj){
        return memObj[n];
    }
    // return n if number is 0 or 1
    if(n <=1){
        return n;
    }
    // store recrussive fib result of each number in memory object
    memObj[n] = fib(n-1,memObj) + fib(n-2,memObj)
    return memObj[n];
}


/* Task 2(B): Alternatively given a number F, print out whether it's a fibonacci number and what the closest index n in the
fibonacci sequence is*/

function checkFib(num,obj={0:0,1:1}){

    // if given number is 0 or 1 return number 
    if(num<2){
        return `Given number is a Fibonacci number at index ${num} `;
    }

   let firstFib=0;
   let secondFib=1;
   let nextFib= firstFib + secondFib;
   let index = 2;
   //To store each fibonacci number at specific index
   obj[index] = nextFib;
   // while loop until condition is false
   while(nextFib<num){
    firstFib  = secondFib;
    secondFib = nextFib;
    nextFib   = firstFib + secondFib;
    // Add next fibonacci number at next index
    obj[index++]= nextFib;
   }

   if(nextFib==num){
    return "Given num is a Fibonacci number";
   }
   else {
    // To check nearest index range between lower bond and upper bond of given number 
   
        for(index in obj){
            // check if lower range fibonacci number is nearest to given number 
            if(num - secondFib < nextFib - num && obj[index] == secondFib){
                return `Given number is not a Fibonacci number, the closest Fib Num is ${obj[index]} at index ${index}` 
            }
            //check if high range fibonacci number is nearest to given number 
            else if (num - secondFib > nextFib - num && obj[index] == nextFib){
                return `Given number is not a Fibonacci number, the closest Fib Num is ${obj[index]} at index ${index}` 
            }
        }
        
   }
}

const prompt = require("prompt-sync")({sigint:true});
let input = prompt("Please enter a number: ");
let output = checkFib(input);
console.log(output);




