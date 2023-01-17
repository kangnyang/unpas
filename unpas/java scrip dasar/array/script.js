//menambah isi array
// var arr=[];
// arr[0]="maman";
// arr[1]="mansyur";
// arr[2]="wina";

// console.log(arr);

//menghapus isi array
// var arr=['maman', 'mansyur','wina'];
// arr[1]=undefined;
// console.log(arr)

// //menampilkan isi array
// var arr=['maman', 'mansyur','wina', "yuda"];
// for(var i=0; i<arr.length; i++){
//     console.log("mahasiswa ke- " + (i+1) +"adalah " + arr[i]);
// }

// var arr=["maman", "mansyur", 'wina andriani'];
// //join

// // console.log(arr.join(' - '));
// //push and pop
// var arr=["maman", "mansyur", 'wina andriani'];
// // arr.pop();
// // arr.push("udin");
// // console.log(arr.join(' - '));


// //unshift and shift
// // // arr.unshift("nyanyang");
// // arr.shift();
// // console.log(arr.join(' - '));
// //splice => splice (indexAwal, maudihapusBerpa, elemenBaru1, elemenBaru2, dst)
// var arr=["maman", "mansyur", "wina andriani","yusuf", "lukman"];
// // arr.splice(1, 0, "sayang",'menikah');
// // console.log(arr.join(' - '));

// var arr2= arr.slice(1,4);
// console.log(arr2.join(' - '));

//forEach
// var arr = ["nyanyang", "maman", "mansyur"];
// arr.forEach(function(e) {
//     console.log(e);
// })
// arr.forEach(function(e, i) {
//     console.log(" mahasiswa ke - " + (i + 1) + " adalah : " + e);
// })

//maps
// var jum = [1, 3, 9, 10, 20, 2, 4, 5, 6, 7]
// var jum2 = jum.map(function(e) {
//     return e * 2;
// })
// console.log(jum2.join(" - "));

//sort
// jum.sort(function(a, b) {
//     return a - b;
// });
// console.log(jum);

//filter and find
var jum = [1, 3, 9, 10, 20, 2, 4, 5, 6, 7]
    // var jum2 = jum.filter(function(x) {
    //     return x > 7;
    // })
    // console.log(jum2.join(' - '));


var jum2 = jum.find(function(x) {
    return x > 7;
})
console.log(jum2);