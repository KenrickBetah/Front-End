// Buatlaj fungsi yang menerima 1 parameter angka
// dan mengembalikan string apakah angka yang dimasukan
// adalah bilangan ganjil atau genap dengan menggunakan bentuk IIFE dan callback function

// (function(){
//     let ganjilGenap= 7;
//     let isEligible = ganjilGenap %2 === 0 ? "genap" : "ganjil";         IIFE
//     console.log(isEligible);
// })();  


// function ganjilGenap(hasil, callback){
//     const isEligible = hasil %2 === 0 ? "genap" : "ganjil";          CallBack Function
//     callback (isEligible);
// }
// ganjilGenap("5" , function(isEligible){
//     console.log (isEligible);
// });