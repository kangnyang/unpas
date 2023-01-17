// //dom selection
// //docoment.getElementById() => element
// const jdul = document.getElementById('judul');
// jdul.style.color = 'red';
// jdul.style.backgroundColor = "blue";

// //document.getByTagsName()
// //htmlCollection
// const p = document.getElementsByTagName('p');

// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = "orange";

// }
// //document.getByClassName() = html collection
// const p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML = 'maman mansyur';

//document.querySelector() => elemen
const p4 = document.querySelector('section #b ul li:nth-child(2');
p4.style.color = 'green';

//document.querySelectorAll() => node list sama dengan classname
const p = document.querySelectorrAll('p');
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'red';
}