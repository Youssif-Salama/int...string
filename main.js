let x=5;
console.log(x.toString()+" "+ typeof(x.toString()));
//-----------------------------------
let t="42";
// not : when u concat number with text =text
console.log(parseInt(t,10)+" "+typeof parseInt(t,10));
console.log(parseInt(++t,10));
// return diemensions of a shape as integer values
const shape1=document.querySelector(".shape1");
const shape2=document.querySelector(".shape2");
console.log(shape1.offsetWidth);
console.log(shape1.offsetHeight);
console.log(shape1.offsetWidth);
console.log(shape2.offsetHeight);
const computed1=getComputedStyle(shape1).width;
const computed2=getComputedStyle(shape2).width;
console.log(computed1); //100px
// convert to integer using parseInt
console.log(parseInt(computed1));