


// variable
//masukan dari user
var p=parseInt(prompt(" silahkan masukan angka anda dari 1-10 :"));
// ketentuan komputer
var com=Math.floor(Math.random()*10);

//menentukan nilai dari komputer
if(com <=1 ){
    com==1;
}else if(com >1 && com <=2){
    com==2;
}else if(com >2 && com <=3){
    com==3;
}else if( com >3 && com <=4){
    com==4;
}else if(com >4 && com <=5 ){
    com==5;
}else if(com >5 && com <= 6){
    com==6;
}else if(com >6 && com <= 7){
    com==7;
}else if(com >7 && com <=8){
    com==8;
}else if(com >8 && com <=9){
    com==9;
}else{
    com==10
}

//ketentuan permainan
// 3 kali kesempatan

var nyawa=3;
for(nyawa;nyawa>=1; nyawa--){
    if(p==com){
        alert("selamat jawaban anda benar, nilai dari komputer adalah " + com);
    }else if(p>com){
        p=prompt(" maaf yang anda masukan terlalu tinggi, silahkan cba masukan lagi dan kesempatan anda" + nyawa + " kali" );
    }else if(p<com){
        p=prompt(" maaf yang anda masukan terlalu rendah, silahkan cba masukan lagi dan kesempatan anda" + nyawa + " kali" );
    }else{
        alert("angka yang anda masukan salah ");
        p=prompt("cba masukan lagi");
    }
}


 


    
    

