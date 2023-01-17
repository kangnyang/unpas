//DOM MANIPULATION

// buat elemen baru
const pBaru = document.createElement('p');
const teksBaru = document.createTextNode(' paragraf baru');

//simpan tulisan ke dalam paragraf
pBaru.appendChild(teksBaru);

//simpan pbaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru); //appen.. menyimpan ke akhir section




//membuat elemen baru
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode(' item baru');
// masukin teks ke elemen
liBaru.appendChild(teksLiBaru);
//mencari parent dari elemen dan mencari elemen setelahnya
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
//simpan
ul.insertBefore(liBaru, li2); // parent, elemen baru , lalu elemen setelahnya



//remove elemen
//mencari parent , dan elemen yang mau di remove

const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);



//replace
//mncari paren dan elemen
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
//elemen baru
const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('judul baru');
// masukan teks ke elemen
h2Baru.appendChild(teksH2Baru);
//masukan dalam elemen
sectionB.replaceChild(h2Baru, p4); // sectionB=parent, h2baru= node baru, p4=node lama