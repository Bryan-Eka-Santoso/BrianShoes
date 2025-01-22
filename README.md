<p align="center">
  <a href="https://getbootstrap.com/">
    <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="Bootstrap logo" width="200" height="165">
  </a>
</p>

<h3 align="center">Bootstrap</h3>

<p align="center">
  Sleek, intuitive, and powerful front-end framework for faster and easier web development.
  <br>
  <a href="https://getbootstrap.com/docs/5.3/"><strong>Explore Bootstrap docs »</strong></a>
  <br>
  <br>
  <a href="https://github.com/twbs/bootstrap/issues/new?assignees=-&labels=bug&template=bug_report.yml">Report bug</a>
  ·
  <a href="https://github.com/twbs/bootstrap/issues/new?assignees=&labels=feature&template=feature_request.yml">Request feature</a>
  ·
  <a href="https://themes.getbootstrap.com/">Themes</a>
  ·
  <a href="https://blog.getbootstrap.com/">Blog</a>
</p>


## Bootstrap 5

Our default branch is for development of our Bootstrap 5 release. Head to the [`v4-dev` branch](https://github.com/twbs/bootstrap/tree/v4-dev) to view the readme, documentation, and source code for Bootstrap 4.

## Halaman About Us

```
var textClass = document.getElementsByClassName("text-welcome");
var img = document.getElementsByClassName("img3");
```

1. Variabel textClass digunakan untuk mengambil elemen HTML yang memiliki nama class yaitu .text-welcome, yang saya tentukan untuk teks "Selamat Datang" pada halaman About Us.
2. Variabel img digunakan untuk mengambil elemen HTML yang memiliki nama class yaitu .img3, yang saya tentukan untuk gambar yang menampilkan foto pemilik pada halaman About Us.


```
setInterval(function(){
  for(var i = 0; i < textClass.length; i++){
    textClass[i].style.color="black";
    textClass[i].style.textShadow = "2px 2px 4px white";
  }

setTimeout(function() {
  for (var i = 0; i < textClass.length; i++) {
    textClass[i].style.color = "white";
    textClass[i].style.textShadow = "none";
  }
  }, 500);
}, 1000);
```
Fungsi setInterval dan setTimeout digunakan untuk mengganti textClass pada waktu setiap 1 detik. Teks akan berubah menjadi berwarna hitam dengan efek textShadow berwarna putih. Setelah 500 milidetik, warna teks akan kembali menjadi putih dan efek textShadow akan dihilangkan.

```
for (var i = 0; i < img.length; i++) {
  img[i].addEventListener("mouseover", function() {
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
  });
}
```

Dengan menggunakan addEventListener untuk event mouseover, modal yang berisi informasi tentang pemilik akan ditampilkan ketika mouse melewati area pada gambar.

## Semua Halaman Kategori Produk

```
<form class="d-flex" role="search">
  <div class="input-group">
    <input class="form-control" type="search" id="searchInput" placeholder="Search" aria-label="Search"  autocomplete="off">
    <button class="btn btn-light" disabled><i class="bi bi-search"></i></button>
  </div>
</form>
```


```
document.getElementById('searchInput').addEventListener('input', function() {
    let searchTerm = this.value.toLowerCase();
    let productCards = document.querySelectorAll('.card-product');

    productCards.forEach(function(card) {
        let productName = card.querySelector('.card-title').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
```

Semua halaman produk memiliki sebuah form yang berisi input pencarian untuk mencari produk yang diinginkan oleh pengguna. Pada elemen HTML, form pencarian diberi ID searchInput. Kemudian, addEventListener dengan event input digunakan, sehingga setiap kali pengguna mengetikkan huruf pada form, fungsi JavaScript akan langsung dijalankan tanpa perlu menekan tombol submit.

Pada variabel searchTerm, nilai yang dimasukkan oleh pengguna ke dalam elemen input diambil, lalu menggunakan toLowerCase() untuk mengubah semua huruf menjadi huruf kecil. Ini memastikan bahwa fitur pencarian tidak sensitif terhadap kapitalisasi huruf.

Selanjutnya, pada variabel productCards, semua elemen HTML dengan kelas .card-product diambil. Kemudian, dilakukan perulangan pada productCards untuk memeriksa setiap judul produk yang terdapat pada elemen dengan kelas .card-title. Dalam pengecekan ini, jika nama produk (productName) mengandung bagian dari string pencarian, maka produk tersebut akan ditampilkan. Jika tidak, produk tidak akan ditampilkan.

## Halaman Keranjang

```
const creditCard = document.querySelectorAll("#credit-card");
const payPal = document.querySelectorAll("#paypal");
const gPay = document.querySelectorAll("#gpay");

payPal.forEach(element => {
  element.style.display = "none";
});
gPay.forEach(element => {
  element.style.display = "none";
});

function creditCardDetails(){
  creditCard.forEach(element => {
    element.style.display = "block";
  });
payPal.forEach(element => {
    element.style.display = "none";
  });
gPay.forEach(element => {
    element.style.display = "none";
  });
}

function payPalDetails(){
  creditCard.forEach(element => {
    element.style.display = "none";
  });
  payPal.forEach(element => {
    element.style.display = "block";
  });
  gPay.forEach(element => {
    element.style.display = "none";
  });
}

function gPayDetails(){
  creditCard.forEach(element => {
    element.style.display = "none";
  });
  payPal.forEach(element => {
    element.style.display = "none";
  });
  gPay.forEach(element => {
    element.style.display = "block";
  });
}
```

Pada halaman pembayaran, pengguna diberikan pilihan metode pembayaran. Secara default, yang muncul pertama kali adalah opsi pembayaran menggunakan kartu kredit. Jika pengguna memilih dan menekan tombol PayPal atau GPay, maka halaman dengan ID paypal atau gpay akan ditampilkan, sementara halaman untuk kartu kredit akan disembunyikan.

## Halaman Alamat

```
const formAddress = document.getElementById("form-address");
const addressDisplay = document.getElementById("address-list");

formAddress.addEventListener("submit", function(e){
 e.preventDefault();
 const data = new FormData(e.target);
 let entry = document.createElement('p');

 entry.innerHTML = `
   <div class="row d-flex align-items-center">
    <div class="col-md-11">
      <h5><span class="fw-bold">${data.get("name")}</span> | +62${data.get("number")}</h5>
      <p>${data.get("address")}, ${data.get("city")}, ${data.get("province")}</p>
    </div>
    <div class="col-md-1">
      <button type="button" class="btn btn-danger float-end mx-1 delete-btn">
        <i class="bi bi-trash-fill"></i>
      </button>
    </div>
  </div>
<hr>
    `;
  });
});
```

Jika pengguna mengisi formulir untuk menambahkan alamat dan mengirimkan data dengan menekan tombol submit, maka alamat yang ditambahkan oleh pengguna akan ditampilkan menggunakan innerHTML pada elemen yang sesuai di halaman.

```
addressDisplay.appendChild(entry);
formAddress.reset();
const modal = bootstrap.Modal.getInstance(document.getElementById('insertAddress'));
modal.hide();
```

Data akan ditambahkan dan ditampilkan menggunakan appendChild, kemudian formulir akan direset, dan modal akan ditutup.

```
const deleteBtn = entry.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', function() {
    const confirmDelete = window.confirm("Are you sure you want to delete this address?");
      if (confirmDelete) {
         addressDisplay.removeChild(entry);
      }
```

Setiap data memiliki opsi untuk dihapus. Jika tombol hapus diklik, akan muncul konfirmasi melalui alert terlebih dahulu. Setelah konfirmasi, data akan dihapus menggunakan removeChild().

## Halaman CardBomChallenge ( Game )

```
      let gameCard = document.getElementById("game-card");
      let gameScore = document.getElementById("game-score");
      let alertGame = document.getElementById("alert-game");
      let cardNumbers = [1, 2, 3];
      let scoreInGame = 0;
      let disc = 0;

      function renderCards() {
          gameCard.innerHTML = '';

          cardNumbers = cardNumbers.sort(() => Math.random() - 0.5);

          for (let i = 0; i < cardNumbers.length; i++) {
              gameCard.innerHTML += `
                  <div class="col-md-4 my-3">
                      <div class="card card-game bg-light" id="card-${i}" onclick="checkCard(${cardNumbers[i]}, ${i})">
                          <h1> ? </h1>
                      </div>
                  </div>
              `;
          }
      }
```

Pada kode tersebut, saya membuat sebuah array yang berisi tiga angka, yaitu 1, 2, dan 3. Angka-angka tersebut akan diacak menggunakan cardNumbers.sort(() => Math.random() - 0.5), sehingga urutan angka pada array akan berubah secara acak. Kemudian, saya menampilkan kartu pilihan dengan nilai angka masing-masing dan menutup kartu tersebut agar pengguna dapat menebaknya.

```
          function checkCard(value, index) {
            let selectedCard = document.getElementById(`card-${index}`);
            if(value === 1){
                selectedCard.innerHTML = `<h1><i class="bi bi-brightness-low-fill"></i></h1>`;
            } else {
                selectedCard.innerHTML = `<h1><i class="bi bi-check2-circle"></i></h1>`;
            }
  
            if (value === 1) {
                alertGame.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    You Lose!! You picked the bomb. Score : ${scoreInGame}
                </div>
                `;
                scoreInGame = 0;  
                disc = 0;
            } else {
                scoreInGame += 10;
                if(scoreInGame % 100 === 0){
                    disc += 20000;
                }
                alertGame.innerHTML = `
                <div class="alert alert-success" role="alert">
                    You can pick a card again. Score : ${scoreInGame}
                </div>
                `;
                if (scoreInGame >= 100) {
                    let formattedDisc = new Intl.NumberFormat('id-ID', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(disc);
                    alertGame.innerHTML += `
                    <div class="alert alert-warning" role="alert">
                        You get a voucher worth IDR <span class="text-success">${formattedDisc}</span>
                    </div>
                    `;
                }
            }
            setTimeout(() => {
                renderCards();
            }, 100);
      }
      renderCards();
```

Selanjutnya, saya melakukan pengecekan pada setiap nilai kartu yang dipilih oleh pengguna. Jika nilai kartu tersebut berisi angka 1, pengguna akan diminta untuk mengulang permainan dan skor akan direset menjadi 0. Jika pengguna memilih kartu dengan nilai selain angka 1, mereka akan mendapatkan tambahan skor sebesar 10 poin. Jika pengguna berhasil mencapai skor yang kelipatan 100, mereka akan mendapatkan voucher senilai 20.000, yang berlaku untuk setiap kelipatan tersebut.

Pada awal kode, saya juga memberikan pengecekan untuk menampilkan gambar di dalam kartu yang dipilih oleh pengguna, apakah itu gambar bom atau bukan.

```
      document.addEventListener("DOMContentLoaded", function() {
          var myModal = new bootstrap.Modal(document.getElementById('myModal'));
          myModal.show();
      });
```

Kode tersebut digunakan untuk menampilkan modal di awal saat halaman dibuka, dengan menggunakan addEventListener dan event DOMContentLoaded.
