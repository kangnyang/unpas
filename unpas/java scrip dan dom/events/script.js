//events
//even handler

//mengambil element
const p2 = document.querySelector('.p2');
//membuat fungsi 
function ubahWarnap2() {
    p2.style.backgroundColor = "yellow";
}
// hal yang di lakukan
p2.onclick = ubahWarnap2; //pa=elemen, onclik=kejadian, ubahwarna=fungsi


//addEventListener()
//mengambil element
const p4 = document.querySelector('section#b p');
//menulis event
p4.addEventListener('click', function() { // click = event
    // membuat dan mengambil parent
    const ul = document.querySelector('section#b ul');
    //element baru 
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('item baru');
    //rangkai , masukan teks ke elemen
    liBaru.appendChild(teksLiBaru);
    //simpan dalam ul
    ul.appendChild(liBaru);
});