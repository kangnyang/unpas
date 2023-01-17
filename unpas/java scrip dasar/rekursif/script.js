// function penjumlahanAngka(n) {
//     if(n==0){
//         return;
//     }

//     console.log(n);
//     penjumlahanAngka(n-1);
// }
// penjumlahanAngka(10);

function factorial(n) {
    if(n===0) return 1;
    return n* factorial(n-1);
   
}
console.log(factorial(5));