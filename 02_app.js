//============================================================================
//console syntax
console.log("Hello world!");
alert("Warning: This is your first JS file ");
console.warn("This is warning message");
console.error("This is an error message");
prompt("İsminizi giriniz: ");

//====DEĞİŞKEN TANIMLAMA=====

//VAR
/*
 *VAR eski JS sürümlerinde olan değişken tanımlama keyword'üdür.
 *VAR ile tanımlanan değişkenler her yerden ulaşılabilir.
 *VAR her yerden değiştirilebilir. Data'yı korumaz. Yeniden deklare edilebilir
 *VAR fonksiyon kapsamlıdır. (function scope)
 */
var isim = "JavaScript";
console.log(typeof isim); //string

isim = 3.14;
console.log(typeof isim); //number

var fName, lName;
fName = "John";
lName = "Doe";
console.log(fName + " " + lName);

var brand = "Toyota",
  model = "Corolla";
console.log(brand + " " + model);

//CONST
/*
 *CONST ile atama yapılacaksa ilk başta yapılır.
 *CONST ile yapılan atamalar sonradan değiştirilemez ve deklare edilemez
 */
const piSayisi = 3.14;
console.log(piSayisi); //3.14

//piSayisi = 568;
console.log(piSayisi); //error verir --Uncaught TypeError: Assignment to constant variable.

// LET
/*
 * LET blok kapsamlıdır (block scope)
 * Değiştirilebilir ancak yeniden deklare edilemez.
 *
 */
let fiyat;
fiyat = 10;
console.log(typeof fiyat);

fiyat = "String'e değiştirdim";
console.log(fiyat);
