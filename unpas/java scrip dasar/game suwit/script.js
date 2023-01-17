  var ulang=true;
  while(ulang){

   var p=prompt (" masukan pilihan : gajah, semut, orang");
    var com=Math.random();

    if (com <=0.34){
        com="gajah";
    }else if( com >0.34 && com<=0.37){
        com="semut";
    }else {
        com="orang";
    }

    hasil="";
    if(p==com){
        hasil="seri";
    }else if(p=="gajah"){
        hasil = (com=="orang")?"menang":"kalah";
    }else if(p=="orang"){
        hasil =(com=="gajah")?"kalah": "menang";
    }else if(p=="semut"){
        hasil =(com=="orang")?"kalah":"menang";
    }else{
    hasil = "anda memasukan kata yang salah";
    }

    alert(" Pilihan anda :  " + p + " dan komputer :  "+ com + " \n maka hasilnya  " + hasil);
    ulang=confirm("mau memainkan lagi?");

  }
alert("terima kasih sudah bermain");