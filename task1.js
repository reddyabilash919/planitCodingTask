/*Task 1 : Write a solution to find the character that has the highest number of occurrences within a certain string, ignoring
case. If there is more than one character with equal highest occurrences, return the character that appeared first
within the string */


function maxCharInString(string){
 //Converting given string to lowercase 
 let str = string.toLowerCase();
 // creating an empty object varible map
 const map = {};
 const counter = 1;
 let maxCount = 0;
 let maxChar = '';

 // Looping through given string 
 for(let i=0;i<=str.length-1;i++){
    // if the map object doesn't contain character 
     if(!map[str.charAt(i)]){
         map[str.charAt(i)] = counter;
     }
     // if charcater already exits then increment the count
     else {
         map[str.charAt(i)]++;  
     }
 }

 // looping through map object 
 for( const[key,value]  of Object.entries(map)){
     // check if maxCount value is zero and map object value greater than 1 
     if(maxCount == 0 && value > counter){
        // then assign character and its count to maxcount and maxChar
         maxCount = value;
         maxChar = key;
     }
     // check if next character stored in map object count greater than previous character count 
     else if ( value > maxCount && value > counter){
         maxCount = value;
         maxChar = key;
     }
    }
    // to check if all character stores have equal occurance count  
    if(maxCount==0){
        return `All characters have equal occurance`
    }

    return maxChar;
 
}

const prompt = require("prompt-sync")({sigint:true});
let input = prompt("Please enter a string: ");
let output = maxCharInString(input);
console.log(`Highest occurrences character is : ${output}`);