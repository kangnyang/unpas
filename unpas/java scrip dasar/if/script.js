var  jmlAngkot=10; angkotBeroperasi=6;

for(noAngkot=1; noAngkot<=jmlAngkot; noAngkot++){

    if( noAngkot<=angkotBeroperasi && noAngkot !==5){
        console.log("Angkot no. " + noAngkot + " Sedang beroperasi")
    }
    else if( noAngkot===8 || noAngkot===10 || noAngkot===5){
        console.log("Angkot no. " + noAngkot + " Sedang lembur")

    }else {
        console.log("Angkot no. " + noAngkot + " Sedang  tidak beroperasi")
    }

}
