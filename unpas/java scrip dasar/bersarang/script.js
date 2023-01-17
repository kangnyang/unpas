// var s="";

// for( var i=0; i<10; i++){
//     for(var j=10; j>i; j--){
//         s+="*";
//     }
//     s+="\n";
// }
// console.log(s);



// var s="";
// for(var i=1; i<=20; i++){
//     if(i<=10){
//         for( var j=1; j<=i;j++){
//             s+="*";
//         }
//     }else{
//         for( var j=20; j>=i;j--){
//             s+="*";
//         }
//     }
    
//     s+="\n";
// }
// console.log(s);

var s="";
for(var i=1; i<=10; i++){
    if( i %2==0){
        for( var j=1; j<=10; j++){
            s="";
        }
    }else{
        for(var k=1; k<=10; k++){
            s+="*";
        }
    }

    
}
console.log(s);