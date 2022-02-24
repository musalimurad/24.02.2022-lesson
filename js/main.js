'use strict'

// function 2novu var: declaration, expression



// var btn = document.querySelector("button");



// declaration function 


// function hello(){
//     console.log("salam");
// }
// hello();


// function fullName(){
//     console.log("Musali Murad");
// }

// fullName()


// **********************************



// expression function


// var hello;

// hello = function(){
//     console.log("salam");
// }

// hello();


// *************************************

// Declaration  VS  Expression


// Declaration function : example

// fullName()

// function fullName(){
//     console.log("Murad Musali");
// }

// Declaration function - nu istenilen yerde cagirib istifade edirik  "ozunden sonra veya ozunden evvel"


// Expression function : example



// var fullName = function(){
//     console.log("Musali Murad");
// }


// fullName()


// Expression function -i sadece funksiya teyion olunduqdan sonra ozunnen sonra cagirib istifade ede bilerik


// ************************************


// dinamic function and static function



// ***********Static******************

// static function : example 

// function test(){
//     console.log("static function test-1");
// } //deyer getiren - Declaration function static


// let testTwo = function(){
//     console.log("static function test-2");
// } // deyer getiren
 // Expression function static


//  **************Dinamic*****************************************

// function fullName(firstName, lastName){
//     console.log(`menim adim : ${firstName}, soyadim: ${lastName}`);
// } // Declaration function dinamic

// fullName("Murad", "Musali")


// const fullName = function(firstName, lastName){
//     console.log(`menim adim : ${firstName}, soyadim: ${lastName}`);
// } // Expression function dinamic

// fullName("Murad", "Musali")


// function fullName(firstName, lastName){
//     if (typeof firstName === "undefined" && typeof lastName==="undefined") {
//         console.log(`menim adim : ${firstName = "melumat yoxdur"}, soyadim: ${lastName = "melumat yoxdur"}`);
//     }
//     else{
//         console.log(`menim adim : ${firstName}, soyadim: ${lastName}`);
//     }
   
   
// }

// fullName("Murad", "Musali");

// function fullName(firstName, lastName){
   
//    ternary-"uclu" operator

//   typeof firstName=== "undefined" && typeof lastName === "undefined"? console.log(`menim adim : ${firstName = "melumat yoxdur"}, soyadim: ${lastName = "melumat yoxdur"}`) : console.log(`menim adim : ${firstName}, soyadim: ${lastName}`);
   
// }

// fullName("Murad", "Musali");


// function fullName(firstName="melumat yoxdur", lastName="melumat yoxdur"){
//     console.log(`menim adim : ${firstName}, soyadim: ${lastName}`);
// }

// fullName("Murad", "Musali")


// ***********************************************************


// return

// var pText = document.querySelector("p")

//  function square(x){
//      return x*x
//  }

//  function cube(y){
//      return y*y*y
//      console.log("salam"); //teyin olunub amma istifade oluna bilmez
//  }

//  var sum =  square(2)

//  sum = cube(sum)

//  pText.innerHTML = sum


// **************************** Scope anlayisi ********************************


// var, let, const 

// var firstName = "Murad"; //global scope


// function firstNameFunc(){
//     // var firstName = "Ruslan" //yeni bir deyisken teyin edirsen
//     firstName = "Ruslan" // var olan deyiskenin deyerini deyisirsen
//     console.log(firstName);
// }
// firstNameFunc()

// if (true) {
//     firstName = "Ayxan";
//     console.log(firstName);
// }

// ********* Function Scope *********

// var nameFunction = function(){
//     var firstName = "Murad"
   // var firstName = "Ruslan"  //yeni bir deyisken teyin etmek
   // firstName = "Ayxan" //var olan deyiskenin deyerini deyisir
   // console.log(firstName);
// }

 // console.log(firstName);   eger bir deyiskeni function-nin icinde teyin etmisemse sadece hemi functionun-icinde istifade ede bilerem ve bu function scope adlanir

// nameFunction()


// ***********************************

// ************* Block Scope ************************


// if (true) {
//     var firstName = "Murad" //Block scope

//     function nameFunc(){
//         console.log(firstName);
//     }

//     nameFunc()
// }


// function fullName(){
//     if (true) {
//         var firstName = "Murad"

//     }

//     console.log(firstName);
// }

// fullName()

// var firstName = "Murad" //global scope


// if (true) {
//     let firstName = "Murad"; //block scope

//     function nameFunc() {
//         firstName = "Ayxan"  //function scope

       
//     }
    
//     console.log(firstName);

//     nameFunc()
// }



// if (true) {
//     var firstName = "Murad"
//     firstName = "Ruslan"
//     const job = "developer" 
//     // job = "Hacker"  const-ile teyin olunan bir deyiskenin deyerini cagirib yeni deyer oture bilmerem
//     console.log(job);
// }  //scope yaratmir

// const-un var-dan ferqi odur ki deyisken teyin etmek yeni yuxarida qeyd etdiyim  2ci ferqi ise block scopeda deyiskeni var ile teyin etmisemse onu globaldada cagirib istifade ede bilerem
// amma block scope-da const ile teyin etdiyim deyiskeni globalda cagirib istifade ede bilmerem





// function-lar ozu scope yaradir yeni bir novu qapali edir 
// block-lar ise ozu scope yaratmir 
// function scopelarla block scopelarin ferqi budur.


// function nameFunc(){
//     var lastName = "Musali" 
// }  // scope yaradir

// console.log(lastName);

// let firstName = "Murad" //global scope
//  firstName = "Ruslan"

  var firstName = "Murad"
 firstName = "Ayxan"
 var firstName = "Zulfu"

 let lastName = "Musali"
//  let lastName = "Kerimov"  //letde bu islemir 
 lastName = "Kerimov"


 const job = "developer";
//  const job = "police" olmur
//  job = "doctor" olmur

console.log(firstName);
// function nameFunc(){
    
//     console.log(firstName);
// }
// nameFunc()
// if (true) {
   
//     // const lastName = "Musali"
// }



// console.log(lastName);

// console.log(firstName);











 










