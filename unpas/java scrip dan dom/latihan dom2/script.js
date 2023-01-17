//membuat fungsi pilihan kom
function getPilihanKomputer() {
    const com = Math.random();
    if (com <= 0.34) return 'gajah';
    if (com > 0.34 && com <= 0.37) return 'orang';
    return 'semut';
}

//fungston rules
function getHasil(com, player) {
    if (player == com) return 'Seri';
    if (player == 'gajah') return (com == 'orang') ? ' Menang' : 'Kalah';
    if (player == 'orang') return (com == 'gajah') ? 'Kalah' : 'Menang';
    if (player == 'semut') return (com == 'gajah') ? 'Menang' : 'Kalah';
}

//membuat gambar kom muter
function puter() {
    //mengambil gambar komputer
    const imgKomputer = document.querySelector('.img-komputer');
    //semua gambar
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0; //indeks jumlah putar
    const waktuMulai = new Date().getTime();
    setInterval(function() { // fungsi untuk berulang2 dlm waktu tertentu
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgKomputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i == gambar.length) i = 0;

    }, 100)
}



//menyeleksi 3 gmbar sekaligus
const pilihan = document.querySelectorAll('li img');
// loping img
pilihan.forEach(function(pil) {
    //event tiap pilihan
    pil.addEventListener('click', function() {
        const pilihanKomputer = getPilihanKomputer();
        const pilihanPlayer = pil.className;
        //hasilnya , rulesnya
        const hasil = getHasil(pilihanKomputer, pilihanPlayer);
        puter();

        setTimeout(function() {


            //ganti gambar
            const imgKomputer = document.querySelector('.img-komputer');
            imgKomputer.setAttribute('src', ' img/' + pilihanKomputer + '.png');
            //info
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000);
    });

});






















// //cara2
// //ambil gajah
// const pGajah = document.querySelector('.gajah');
// //even
// pGajah.addEventListener('click', function() {
//     //ambil pilihhan kom dan player
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pGajah.className;
//     //hasilnya , rulesnya
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);
//     //ganti gambar
//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', ' img/' + pilihanKomputer + '.png');
//     //info
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// //ambil orang
// const pOrang = document.querySelector('.orang');
// //even
// pOrang.addEventListener('click', function() {
//     //ambil pilihhan kom dan player
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pOrang.className;
//     //hasilnya , rulesnya
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);
//     //ganti gambar
//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', ' img/' + pilihanKomputer + '.png');
//     //info
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// //ambil orang
// const pSemut = document.querySelector('.semut');
// //even
// pSemut.addEventListener('click', function() {
//     //ambil pilihhan kom dan player
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pSemut.className;
//     //hasilnya , rulesnya
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);
//     //ganti gambar
//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', ' img/' + pilihanKomputer + '.png');
//     //info
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });