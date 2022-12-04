
// array property

var arr = [10, 20, 30, 40, 50,60,70, 80, 90, 100];

document.writeln(`array length :${arr.length} <br>`);


//  Inserts Methods= push/ unshift

//push -In the End
arr.push(60);
document.writeln(`array  : ${arr} <br>`);

//unshifht - In the Start
arr.unshift(5);
document.writeln(`array : ${arr} <br>`);

//splice Add In Between 

arr.splice(3, 0, 25)
document.writeln(`array : ${arr} <br>`);

arr.splice(1, 1)
document.writeln(`array splice is : ${arr} <br>`);

//delete = > pop & shift

//pop- In the last delet
arr.pop();
document.writeln(`array pop is ${arr} <br>`);

//shif- fisrt delete
arr.shift();
document.writeln(`array shift is ${arr} <br>`);

arr.splice(2, 1);
document.writeln(`array splice is ${arr} <br>`);

arr.splice(1, 1, 85, 35);
document.writeln(`splice is ${arr} <br>`);

// sorting = ascending & descending
var sortedArray = arr.sort((a, b) => {
    return a - b;
});
document.writeln(`array ascending ${sortedArray} <br>`);

//descending sort
var sortedArray = arr.sort((a, b) => {
    return b - a;
});
document.writeln(`array descending ${sortedArray} <br>`);

//index of array
var index = arr.indexOf(100);
document.writeln(`index of 100 is : ${index} <br>`);

arr.push(100);
document.writeln(`${arr} <br>`);

//last index of array
var lastIndexOf = arr.lastIndexOf(100);
document.writeln(`last index of : ${lastIndexOf} <br>`);

//slice = starting and Ending point -1
//  var splicearr = arr.splice(2, 7);
//  document.writeln(`splice array :${splicearr} <br>`);

//Es5 = map method add

//   var mappedArr = arr.map((ele)=>{
//     return ele*2;
//     });
//   document.writeln(`mapped array is s= ${mappedArr} <br>`);

//filter

var filteredArr = arr.filter((ele) => {
    return ele > 50;

});
document.writeln(`The array of filter is :${filteredArr} <br>`);

// Reuced Method 
var addition = arr.reduce((ele , total)=>{
   return  ele + total;
})
document.writeln(`reduced total = ${addition} <br>`);
  

//right reduced
var sub = arr.reduce((ele, total)=>{
    return ele - total;
})
document.writeln(`The right Reduced:  ${sub} <br>`);

//for each method
arr.forEach((ele) => {
   
})
document.writeln(`For Each :${arr} <br>`);

//every Method:
var isEvery = arr.every((ele)=>{
    return ele > 30;
})
 document.writeln(`every element is greter than 30: ${isEvery} <br>`);

 //some Method
var isSome = arr.some((ele)=>{
    return ele > 30;
})
document.writeln(`Is some method is : ${isSome} <br>`);

//ES6- 1) Find Methods
var element = arr.find((ele)=>{
    return ele >10;
})
document.writeln(`Is Find method : ${element} <br>`);

var i = arr.findIndex((ele)=>{
    return ele > 30;
})
document.writeln(`find index : ${i} <br>`);