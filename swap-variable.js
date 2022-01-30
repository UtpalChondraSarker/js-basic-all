let a=34;
let b=50;
const temp=a;
a=b;
b=temp;
console.log(a,b);

//destructing
let utpal=50;
let sushanto=60;
[utpal,sushanto]=[sushanto,utpal]
console.log(utpal,sushanto);