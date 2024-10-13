
// Temukan elemen dengan class "bagus-badge" dan area pembatas (hero-column)
const badge = document.querySelector('.floating-element.bagus-badge');
const heroSection = document.querySelector('.hero-column');

// Fungsi untuk menghasilkan posisi acak dalam batas tertentu
function randomPosition(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fungsi untuk menggerakkan elemen ke posisi acak dalam batas area hero
function moveRandomWithinHero() {
    const heroRect = heroSection.getBoundingClientRect();
    const badgeRect = badge.getBoundingClientRect();

    const randomLeft = randomPosition(
        0, 
        heroRect.width - badgeRect.width 
    );

    const randomTop = randomPosition(
        0, 
        heroRect.height - badgeRect.height 
    );

    badge.style.transition = 'all 0.5s ease-in-out';
    badge.style.position = 'absolute';
    badge.style.left = `${randomLeft}px`;
    badge.style.top = `${randomTop}px`;
}


function startContinuousRandomMovement() {
    setInterval(() => {
        moveRandomWithinHero(); 
    }, 1000); 
}


startContinuousRandomMovement();


const hamburger = document.getElementById("hamburger-menu");
const navMenu = document.querySelector(".menu");


hamburger.addEventListener("click", (event) => {
    event.preventDefault();
  navMenu.classList.toggle("active");
});




// komentar
window.fbAsyncInit = function() {
    FB.init({
        appId      : '1073892667515275', //facebook app id
        xfbml      : true,
        version    : 'v10.0' 
    });
};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); 
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


// kartu mirip mac
const kontainerKartu = document.getElementById('kontainer-kartu');
let isPaused = false;


const originalKartu = kontainerKartu.innerHTML;
kontainerKartu.innerHTML += originalKartu; 


document.getElementById('carousel').addEventListener('mouseover', () => {
  if (!isPaused) {
    kontainerKartu.style.animationPlayState = 'paused';
    isPaused = true;
  }
});


document.getElementById('carousel').addEventListener('mouseout', () => {
  if (isPaused) {
    kontainerKartu.style.animationPlayState = 'running';
    isPaused = false;
  }
});

document.addEventListener("DOMContentLoaded", function() {
    // Ambil semua elemen tab dan konten kategori
    const tabs = document.querySelectorAll(".tab");
    const categories = document.querySelectorAll(".category-content");

    // Fungsi untuk mengubah tab aktif dan menampilkan kategori yang sesuai
    function changeTab(event) {
        // Hilangkan kelas 'active' dari semua tab dan kategori
        tabs.forEach(tab => tab.classList.remove("active"));
        categories.forEach(category => category.style.display = "none");

        // Tambahkan kelas 'active' pada tab yang diklik
        event.target.classList.add("active");

        // Tampilkan kategori yang sesuai dengan tab yang diklik
        const selectedCategory = event.target.getAttribute("data-category");
        document.querySelector('#${selectedCategory}-content').style.display = "block";
    }

    // Tambahkan event listener pada setiap tab
    tabs.forEach(tab => {
        tab.addEventListener("click", changeTab);
    });

    // Tampilkan konten pertama secara default (Design)
    document.querySelector("#design-content").style.display = "block";
});

// Contoh interaksi klik kategori
document.querySelectorAll('.category-title').forEach(category => {
    category.addEventListener('click', function() {
        document.querySelectorAll('.category-content').forEach(content => {
            content.style.display = 'none'; // Sembunyikan semua kategori
        });
        const categoryId = this.getAttribute('data-target'); // Ambil target ID
        document.querySelector(`#${categoryId}`).style.display = 'grid'; // Tampilkan kategori yang diklik
    });
});


function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  // Sembunyikan semua konten tab
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Hapus class "active" dari semua tablinks
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Tampilkan konten tab yang dipilih dan tambahkan class "active"
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Menampilkan tab pertama saat halaman dimuat
document.getElementsByClassName("tablinks")[0].click();

