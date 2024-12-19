import React, { useState } from 'react';
import axios from 'axios';
const MahasiswaForm = () => {
 const [nim, setNim] = useState('');
 const [nama, setNama] = useState('');
 const [alamat, setAlamat] = useState('');
 const [tanggal_lahir, setTanggalLahir] = useState('');
 const [fakultas, setFakultas] = useState('');
 const [prodi, setProdi] = useState('');
 const handleSubmit = (e) => {
 e.preventDefault();
 const mahasiswa = { nim, nama, alamat, tanggal_lahir, fakultas,
prodi };
 axios.post('http://127.0.0.1:8000/api/mahasiswas', mahasiswa)
 .then(response => {
 alert('Mahasiswa berhasil ditambahkan!');
 })
 .catch(error => console.error(error));
 };
 return (
<div>
<h2>Tambah Mahasiswa</h2>
 <form onSubmit={handleSubmit}>
 <input type="text" placeholder="NIM" value={nim} onChange={(e)=> setNim(e.target.value)} />
 <input type="text" placeholder="Nama" value={nama}
onChange={(e) => setNama(e.target.value)} />
 <input type="text" placeholder="Alamat" value={alamat}
onChange={(e) => setAlamat(e.target.value)} />
 <input type="date" value={tanggal_lahir} onChange={(e) =>
setTanggalLahir(e.target.value)} />
 <input type="text" placeholder="Fakultas" value={fakultas}
onChange={(e) => setFakultas(e.target.value)} />
 <input type="text" placeholder="Prodi" value={prodi}
onChange={(e) => setProdi(e.target.value)} />
 <button type="submit">Tambah Mahasiswa</button>
 </form>
 </div>
 );
};
export default MahasiswaForm;