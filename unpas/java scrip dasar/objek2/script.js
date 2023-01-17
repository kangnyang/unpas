//membuat objeck angkot
// nama objeknya angkot dengan 4 parameter yakni supir, trayek, penumpang dan kas
function Angkot(supir, trayek, penumpang, kas) {
    // membuat properti supir
    this.supir = supir;
    //membuat properti trayek
    this.trayek = trayek;
    //membuat properti penumpang
    this.penumpang = penumpang;
    //membuat properti kas
    this.kas = kas;

    // bila ada penumpang naik
    // maka angkot akan terisi oleh nama penumpang
    this.penumpangNaik = function(namaPenumpang) {
            // tambahkan nama penumpang ke penumpang
            this.penumpang.push(namaPenumpang);
            //kembalikan properti penumpang
            return this.penumpang;
        }
        //bila ada penumpang turun
        // maka , hilangkan nama 
        // bayar , maka kas akan bertambah
        // properti penumpangTrun dengan membuat fungsi yang parameternya namapenumpang dan bayar
    this.penumpangTurun = function(namaPenumpang, bayar) {

        //bila angkot masih kosong atau jumlah  penumpang masih 0
        if (this.penumpang.length === 0) {
            //tamplikan alert
            alert('angkot masih kosong');
            //kembalikan nilai
            return false;
        }
        // jika nama penumpang ada di dalam angkot , maka kursi akan undefined dan penumpang membayar kas
        //mengecek semua penumpang
        for (var i = 0; i < this.penumpang.length; i++) {
            //jika penumpang sama dengan namaPenumpang 
            if (this.penumpang[i] == namaPenumpang) {
                //ganti properti kursi penumpang dengan undefined
                this.penumpang[i] = undefined;
                // uang kas sama dengan di tambah uang byar
                this.kas += bayar;
                //kembalikan properti penumpang
                return this.penumpang;
            }
        }
    }

}
//variable angkot
var angkot1 = new Angkot(' Maman', ['garut', 'bandung'], [], 0);

var angkot2 = new Angkot('andrini', [' bandung', ' jambi'], [], 0);