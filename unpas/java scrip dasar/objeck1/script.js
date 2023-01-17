//objek literasi

var mhs1 = {
    nama: 'maman',
    nmp: 2017131002,
    jurusan: "informatika"

}

//function declaration
function buatObjeckMahasiswa(nama, npm, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.npm = npm;
    mhs.jurusan = jurusan;
    return mhs;
}
var mhs3 = buatObjeckMahasiswa('maman', '2017131004', ' teknik informatika');


//constructor 
function Mahasiswa(nama, npm, jurusan) {
    this.nama = nama;
    this.npm = npm;
    this.jurusan = jurusan;
}
var mhs4 = new Mahasiswa('mansyur', '2017131007', 'industri');