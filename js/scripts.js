console.log('running');

// varible and data types

const myName = 'jedi'


let newFavoriteLanguage= 'JavaScript'
let favoriteLanguage = newFavoriteLanguage

console.log('hi my name is ',myName, 'and my favorite language is', favoriteLanguage);


//============ strings
let firstVariable = ' Hello World' 
 firstVariable =  15 

 let secondVariable = firstVariable

 secondVariable = 'broooo'

 console.log(firstVariable);

 let yourName = "john"

 console.log('Hello, my name is', yourName);



 // Booleans

 const a = 4;
 const b = 53;
 const c = 57;
 const d = 16;
 const e = 'Kevin';

 console.log(a < b);
 console.log(c > d);
 console.log('Name' === 'Name');
 // FOR THE NEXT TWO, USE ONLY && OR ||
 console.log(true || false);
 console.log(false || false || false || false || false || true);
 console.log(false === false)
 console.log(e === 'Kevin');
 console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
 console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
 console.log(48 == '48');


 // Farm
 let animal = 'pig'
 
 
 if (animal === 'cow') {
    console.log('moooooooo');
    
 } else {
    console.log('hey! you no moooooo');
 }

 //Driver

// let userAge ;

// userAge = prompt("enter your age")

// if (userAge > 16) {

       
//       console.log("Here are the keys!");
//     } else {
//       console.log("Sorry, you're too young");
//     }
    
   

 //Biggie Smalls
let num = 9

 if (num < 100) {
    console.log('lil number');
   
} else  {
    console.log('Big Dog');
 }
 
 // Monkey 
 if (num < 5 ) {
    console.log('lil number');
   
} else if (num >= 10) {
    console.log('Big Dog');
 } else {
    console.log("monkey");
 }


 for (let i = 0; i <= 10; i++) {
   console.log(`i is : ${i}`);
 }
 
 for (let i = 10; i <= 400; i ++) {
   console.log(`i is : ${i}`);
 }
 for (let i = 12; i <= 4000; i += 3) {
   console.log(`i is : ${i}`);
 }
 
 let j = 1

while (j <= 100) {
  if (j % 2 === 0) {
    console.log(`${j} is even`);
    
  } else {
   //  console.log(`${j} is odd`);
  }
  j++;
}

for (let i = 5; i <= 100; i+=5) {
   console.log(`I found a ${i}. High five!`);
   
   
 }
let n = 1

 while (n <= 100) {

   if (n % 5 === 0 && n % 3 === 0) {
      console.log(`I found a ${n}. High five!, Three is a crowd!`);
      
   }
   else if (n % 5 === 0) {
      console.log(`I found a ${n}. High five!`);

      
   } else if (n % 3 === 0) {
      console.log(`I found a ${n}. Three is a crowd!`); 
      
   } 

   n++;
   
 }

 let i,  bank_account = 0
i = 1
while (i<=10){
  
  if(i%1==0){
   bank_account= bank_account + i
  }

  i++
}
console.log(`You have $ ${bank_account} in your bank account` );


 let k,  bank_accountb = 0
k = 1
while (k<=100){
  
  if(k%1==0){
   bank_accountb= bank_accountb + k * 2
  }

  k++
}
console.log(`You have $ ${bank_accountb} in your bank account` );
   

//? arrays 

const quotes = ['life is like a box of chocolates', 'boats & ***s', ''];


const randomThings = [1, 10, "Hello", true];