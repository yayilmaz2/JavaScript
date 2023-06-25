//============================================================================
//console syntax
console.log("Hello world!");
alert("Warning: This is your first JS file ");
console.warn("This is warning message");
console.error("This is an error message");
prompt("İsminizi giriniz: ");

//====DEĞİŞKEN TANIMLAMA=====

//VAR
var isim = "JavaScript";
console.log(typeof isim); //string

isim = 3.14;
console.log(typeof isim); //number

var fName, lName;
fName = "John";
lName = "Doe";
console.log(fName+" "+lName); 

var brand="Toyota", model="Corolla";
console.log(brand+" "+model);

/* 
*VAR eski JS sürümlerinde olan değişken tanımlama keyword'üdür.
*VAR ile tanımlanan değişkenler her yerden ulaşılabilir.
*VAR her yerden değiştirilebilir. Data'yı korumaz.
*VAR fonksiyon kapsamlıdır. (function scope) 
*/

//CONST
const piSayisi = 3.14;
console.log(piSayisi); //3.14

//piSayisi = 568;
console.log(piSayisi); //error verir --Uncaught TypeError: Assignment to constant variable.

/*
*CONST ile atama yapılacaksa ilk başta yapılır.
*CONST ile yapılan atamalar sonradan değiştirilemez.
*/

// LET
let fiyat;
fiyat = 10;
console.log(typeof fiyat);

fiyat = "String'e değiştirdim";
console.log(fiyat);

//STRING TANIMLAMA

let name1 = "Bill";
let name2 = 'Elon';
let name3 = `Mark`;

console.log(name1+" "+name2+" "+name3);




