// fungsi mengganti nama
function replacename() {
    let nama = prompt('Halo, siapa nama anda', '');
    if (nama) {
        document.getElementById("ganti_nama").innerHTML = nama;
    }
}
replacename();

// Pastikan elemen dengan ID 'klik' ada di HTML sebelum menambahkan event listener
const tombolKlik = document.getElementById('klik');
if (tombolKlik) {
    tombolKlik.addEventListener('click', function () {
        replacename();
    });
}

// untuk menampilkan hasil
document.getElementById('validasi').addEventListener('submit', function (e) {
    e.preventDefault();

    const nama = document.getElementById('nama').value.trim();
    const tanggal = document.getElementById('tanggal_lahir').value.trim();
    const email = document.getElementById('email').value.trim();
    const pesan = document.getElementById('pesan').value.trim();
    const hasil = document.getElementById('hasil');

    if (!nama || !tanggal || !pesan) {
        alert('Mohon isi semua form yang ada');
        return;
    }

    hasil.innerHTML = `
        <h3>Hasil Submit</h3>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Tanggal Lahir:</strong> ${tanggal}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong> ${pesan}</p>
    `;
});
