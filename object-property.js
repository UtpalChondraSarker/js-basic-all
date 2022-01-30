var computer={
    name:'hp itel core i5 8th gen',
    price:50000,
    address:'dhaka',
    phone:453545,
}
//console.log(computer);
//object read kora
var result=computer.name;
//console.log(result);

//object set kora
var set=computer.phone=52000
console.log(set);
//console.log(computer);

computer['phone']=083873;
console.log(computer);

var adder='address';
computer[adder]='kishoregonj'
console.log(adder);
console.log(computer);