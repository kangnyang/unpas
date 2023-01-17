// membuat warna bg berubah
//ambil elemen
const tUbahWarna = document.getElementById('tUbahWarna');
//ambil  bodi
//membuat even
tUbahWarna.onclick = function() {
    // document.body.style.backgroundColor = 'blue';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda');
}


//membuat tombol
const tAcakWarna = document.createElement('button'); // membuat elemen baru button
const teksTombol = document.createTextNode('acak warna'); // memasukan teks ke elemen
tAcakWarna.appendChild(teksTombol); //merangkai
tAcakWarna.setAttribute('type', ' button'); // memasukan type ke button
//simpan elemen
tUbahWarna.after(tAcakWarna);

//event
tAcakWarna.addEventListener('click', function() {
    //membuat warna random
    const r = Math.round(Math.random() * 255 + 1); // untuk Red
    const g = Math.round(Math.random() * 255 + 1); // untuk green
    const b = Math.round(Math.random() * 255 + 1); //untuk blue
    //apa yang di lakukan
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'; //merubah warna bg

});



//tangkap slider
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');
//event yang di berikan
sMerah.addEventListener('input', function() { // slid merah
    // sMerah.value; // untuk mengambil nilai dalam input
    const r = sMerah.value; // membuat variabel red
    const g = sHijau.value; // membuat variable green
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

sHijau.addEventListener('input', function() { //slide hijau
    // sMerah.value; // untuk mengambil nilai dalam input
    const r = sMerah.value; // membuat variabel red
    const g = sHijau.value; // membuat variable green
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});
sBiru.addEventListener('input', function() { //slide biru
    // sMerah.value; // untuk mengambil nilai dalam input
    const r = sMerah.value; // membuat variabel red
    const g = sHijau.value; // membuat variable green
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

});

// merubah warna dengan pergerakan mouse
document.body.addEventListener('mousemove', function(event) {
    // clientX => untuk mencari koordinatX
    //clientY => untuk mencari koordinat Y 
    //event.clientX;
    //window.innerWidth; lebar browser
    //membuat koordniat x
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    // console.log(xPos);
    //membuat koordinat y
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    //simpan
    document.body.style.backgroundColor = 'rgb(' + xPos + ',' + yPos + ',100)';
});