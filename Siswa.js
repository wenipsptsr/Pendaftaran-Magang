// Inisialisasi daftar siswa
let daftarSiswa = [];
let mode = 'tambah'

// CREATE, READ, UPDATE, DELETE

// Fungsi menampilkan siswa ke tabel
const tampilkanSiswa = () => {
const tblSiswa = document.getElementById('tblSiswa');
  tblSiswa.innerHTML = '<tr><th class="text-center">No</th><th class="text-center">Nama</th><th class="text-center">JenKel</th><th class="text-center">E-mail</th><th class="text-center">No HP</th><th class="text-center">Alamat</th><th class="text-center">Asal Sekolah</th><th class="text-center">NISN</th><th class="text-center">Edit</th><th class="text-center">Hapus</th></tr>';
daftarSiswa.forEach((siswa, idx) => {
  tblSiswa.innerHTML += `
    <tr>
      <td class="text-center">${idx + 1}}</td>
      <td class="text-center">${siswa.nama}</td>
      <td class="text-center">${siswa.jenKel}</td>
      <td class="text-center">${siswa.email}</td>
      <td class="text-center">${siswa.noHp}</td>
      <td class="text-center">${siswa.alamat}</td>
      <td class="text-center">${siswa.asalSekolah}</td>
      <td class="text-center">${siswa.nisn}</td>
      <td class="text-center"><button class="btn btn-warning" onclick="editSiswa('${siswa.nama}')">Edit</button></td>
      <td class="text-center"><button class="btn btn-danger" onclick="hapusSiswa('${siswa.nama}')">Delete</button></td>
    </tr>`;
  });
};


// Fungsi untuk menambah atau mengedit siswa
const tambahSiswa = () => {
const nama = document.getElementById('txtNama').value;
const jenKel = document.getElementById('jenKel').value;
const email = document.getElementById('email').value;
const noHp = document.getElementById('noHp').value;
const alamat = document.getElementById('txtAlamat').value;
const asalSekolah = document.getElementById('asalSekolah').value;
const nisn = document.getElementById('Nisn').value;

 if (nama && jenKel && email && noHp && alamat && asalSekolah && nisn) {
  const siswaBaru = { nama, jenKel, email, noHp, alamat, asalSekolah, nisn };
  
 if (mode === 'tambah') {
  daftarSiswa.push(siswaBaru)
  } else {
  daftarSiswa[mode] = siswaBaru
  }

// Kosongkan input setelah menambah atau mengedit siswa
batalSiswa();
tampilkanSiswa();

 }
};

// Fungsi untuk mengedit siswa
const editSiswa = (nama) => {
const indexEdit = cariIndex(nama);
const siswaDiedit = daftarSiswa[indexEdit];

document.getElementById('txtNama').value = siswaDiedit.nama;
 document.getElementById('jenKel').value = siswaDiedit.jenKel;
 document.getElementById('email').value = siswaDiedit.email;
 document.getElementById('noHp').value = siswaDiedit.noHp;
 document.getElementById('txtAlamat').value = siswaDiedit.alamat;
 document.getElementById('asalSekolah').value = siswaDiedit.asalSekolah;
 document.getElementById('Nisn').value = siswaDiedit.nisn;

mode = indexEdit

};


// Fungsi untuk mencari indeks siswa berdasarkan nama
const cariIndex = (nama) => {
return daftarSiswa.findIndex((siswa) => siswa.nama === nama);
};


// Fungsi untuk menghapus siswa
const hapusSiswa = (nama) => {
const indexDihapus = cariIndex(nama);
daftarSiswa.splice(indexDihapus, 1);
   tampilkanSiswa(); // Memperbarui tabel setelah menghapus siswa 
};


// Fungsi untuk membatalkan edit dan mengosongkan input
const batalSiswa = () => {
  mode = 'tambah'

 document.getElementById('txtNama').value = "";
 document.getElementById('jenKel').value = "";
 document.getElementById('email').value = "";
 document.getElementById('noHp').value = "";
 document.getElementById('txtAlamat').value = "";
 document.getElementById('asalSekolah').value = "";
 document.getElementById('Nisn').value = "";

}
// Panggil fungsi untuk menampilkan data awal
tampilkanSiswa();
