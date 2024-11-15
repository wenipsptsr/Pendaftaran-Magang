let daftarJurusan = [];
let mode = 'tambah';  // Menandakan apakah sedang menambah atau mengedit

// Fungsi untuk menampilkan jurusan
const tampilkanJurusan = () => {
  const tblJurusan = document.getElementById('tblJurusan');
  tblJurusan.innerHTML = '<tr><th class="text-center">No</th><th class="text-center">Nama Jurusan</th><th class="text-center">Edit</th><th class="text-center">Hapus</th></tr>';

  for (let idx in daftarJurusan) {
    tblJurusan.innerHTML += `
      <tr>
        <td class="text-center">${parseInt(idx) + 1}</td>
        <td class="text-center">${daftarJurusan[idx]}</td>
        <td class="text-center"><button class="btn btn-warning" onclick="editJurusan(${idx})">Edit</button></td>
        <td class="text-center"><button class="btn btn-danger" onclick="hapusJurusan(${idx})">Delete</button></td>
      </tr>`;
  }
};

// Fungsi untuk menambah jurusan
const tambahJurusan = () => {
  const namaJurusan = document.getElementById('txtJurusan').value;

  // Cek apakah input jurusan kosong
  if (jurusan) {
    const dataJurusan = { nama: jurusan};
  }

  if (mode === 'tambah') {
    daftarJurusan.push(dataJurusan);  // Tambah jurusan ke array
  } else {
    daftarJurusan[mode] = dataJurusan;  // Edit jurusan yang sudah ada
  }

  // Kosongkan input setelah menambah atau mengedit jurusan
  mode = 'tambah'; 
  document.getElementById('txtJurusan').value = "";
  // Set mode ke 'tambah' lagi setelah selesai

  tampilkanJurusan();  // Perbarui tabel jurusan
};

// Fungsi untuk mengedit jurusan
const editJurusan = (index) => {
  mode = index;  // Set mode ke 'edit' dengan index jurusan yang dipilih
  document.getElementById('txtJurusan').value = daftarJurusan[index];  // Tampilkan nama jurusan yang akan diedit
};

// Fungsi untuk menghapus jurusan
const hapusJurusan = (index) => {
  daftarJurusan.splice(index, 1);  // Hapus jurusan berdasarkan index
  tampilkanJurusan();  // Perbarui tabel jurusan setelah penghapusan
};

// Fungsi untuk membatalkan pengeditan
const batalJurusan = () => {
  mode = 'tambah';  // Reset mode ke 'tambah'
  document.getElementById('txtJurusan').value = '';  // Kosongkan input
};

// Panggil fungsi untuk menampilkan data jurusan saat halaman dimuat
window.onload = function() {
  tampilkanJurusan();
};