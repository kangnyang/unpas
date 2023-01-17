function tambah(){
    var masuk=0;
    for( i=0; i<arguments.length; i++){
        masuk+=arguments[i];

    }

    return masuk;


}
console.log(tambah(2,4,5));