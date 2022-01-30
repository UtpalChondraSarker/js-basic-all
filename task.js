/* 1Follow the equation bellow: */
let a=5;
let b=3;
const num=(a*b)+(b*a);
console.log(num);

let a1=10;
let b2=20;
const num1=(b*a1)+(a*b2)
console.log(num1);
         
/* 3a+5b */
let a2=100;
let b3=200;
const num2=(3*a2)+(5*b3);
console.log(num2);


/*Write two different ways to get the character ‘ E ’  */
let institudion="European it";
const result=institudion[0];
console.log(result);
const result1=institudion.slice(0,1);
console.log(result1);


/* Write two different ways to get the character ‘ t ’ */
let institudion1="European it";
const result2=institudion1[10];
console.log(result2);
const result3=institudion1.substring(10,11);
console.log(result3);

 /* From the above string, print ‘ IT ’ */
 let institudion2="European it";
 let str=institudion2.slice(9,11);
 const result4=str.toUpperCase();
 console.log(result4);
 
/* Get the specific string ‘ rope ’ from the institution variable, then print the length of that
string */

let institudion3="European it";
let str1=institudion3.slice(2,6);
const result5=str1.length;
console.log(result5);

/* I want to show “American it” from the above variable. */
let institudion4="European it";
const result6=institudion4.replace("European","American")
console.log(result6);
