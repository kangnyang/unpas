var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang) {
    //jika angkot kosong
    if (penumpang.length == 0) {
        //tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        //kembalikan isi array dan kluar dari array
        return penumpang;
    } else {
        //else
        //telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            //jika ada kursi kosong
            //tamabh penumpang di kursi tersebut
            //kembalikan isi  array dan kluar dari function
            if (penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang;

            }
            // juka sudah ada nama yang sama
            //tampilkan pesan kesalahannya
            //kembalikan isi array dan kluar dari functiona
            else if (penumpang[i] == namaPenumpang) {

                console.log(namaPenumpang + " sudah ada di dalam angkot");
                return penumpang;

            }
            //jika sluruh kursi terisi
            //tambah penumpang di akhir array
            //kembalikan isi array dan kluar dari function
            else if (i == penumpang.length - 1) {

                penumpang.push(namaPenumpang);
                return penumpang;

            }
        }
    }
}

var hapusPenumpang = function(namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0) {
        //     tampilkan pesa bahwa angkot kosong
        console.log('angkot masih ksong');
        //     tidka mungkin ada penummpang yang turun
        //     kembalikan isi array dan kluar dari function
        return penumpang;
    }
    // else
    else {
        //     telusuri seluruh kursi dari awal;
        for (i = 0; i < penumpang.length; i++) {
            //         jika nama penumpang sesuai
            if (penumpang[i] == namaPenumpang) {
                //             hapus penumpang dengan mengubah namanya
                //             menjadi undefined
                //             kembalikan isi array dan kluar dari function
                penumpang[i] = undefined;
                return penumpang;
            } else if (i == penumpang.length - 1) {
                //         jika tidak ada nama yang sesuai
                //             tampilkan pesan kesalahannya
                //             kembalikan isi array dan kluar dari function
                console.log(namaPenumpang + " tidak ada di dalam angkot");
                return penumpang;
            }
        }
    }








}