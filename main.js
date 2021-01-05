const reviews = [{
  id: 1,
  name: "susan smith",
  img: "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  text: "Roni Bimbang, dalam kepalanya ia takut akan ketidakpastian hidup di Jerman, dan merasa berat meninggalkan anaknya yang masih kecil, ia takut startup tempatnya bekerja nanti tidak berkembang dan akhirnya tutup, Roni tidak mengambil tawaran itu dan melanjutan karirnya di Jakarta,."
},
{
  id: 2,
  name: "alan smith",
  img: "https://images.unsplash.com/photo-1542132583-3599b0b5c1cf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
  text: "Lima tahun berlalu, Startup baru di Jerman yang ditolak oleh Roni berkembang pesat hingga masuk jajaran starup terbesar di Jerman dan di liput oleh media Internasional, Sedangkan Roni merasa karirnya mentok dan tidak ada ilmu baru yang bisa dipelajari diperusahaanya saat itu. ia merasa tidak ada lompatan perkembangan dari dirinya,"
},
{
  id: 3,
  name: "ely simons",
  img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  text: "resign dari tempat kerja dan tidak ada penghasilan adalah ketakutan, bertahan di tempat kerja yang menyiksa dan rekan kerja yang toxic adalah bahaya.."
}

];
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const info = document.getElementById('info');

// const prevBtn = document.querySelector(".prev");
// const nextBtn = document.querySelector(".next");

let index = 0;
window.addEventListener("DOMContentLoaded", function () {
  showPerson(index)
});


document.body.addEventListener("click", function (e) {
  if (e.target.classList.contains("next")) {
    index++;
    if (index > reviews.length - 1) {
      index = 0;
    }
    showPerson(index)
  } else if (e.target.classList.contains("prev")) {
    index--;
    if (index < 0) {
      index = reviews.length - 1;
    }
    showPerson(index);
  }
});

function showPerson(person) {

  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  info.textContent = item.text;
}
