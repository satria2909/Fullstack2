import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MahasiswaList = () => {
  const [mahasiswa, setMahasiswa] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    fetchMahasiswa();
  }, []);

  const fetchMahasiswa = () => {
    axios
      .get('http://127.0.0.1:8000/api/mahasiswas')
      .then((response) => setMahasiswa(response.data))
      .catch((error) => console.error(error));
  };

  const handleDelete = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus data ini?')) {
      axios
        .delete(`http://127.0.0.1:8000/api/mahasiswas/${id}`)
        .then(() => {
          alert('Data berhasil dihapus!');
          fetchMahasiswa();
        })
        .catch((error) => console.error(error));
    }
  };

  const handleEdit = (data) => {
    setIsEditing(true);
    setEditData(data);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://127.0.0.1:8000/api/mahasiswas/${editData.id}`, editData)
      .then(() => {
        alert('Data berhasil diperbarui!');
        setIsEditing(false);
        fetchMahasiswa();
      })
      .catch((error) => console.error(error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  return (
    <div>
      <h2>Daftar Mahasiswa</h2>
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <h3>Edit Mahasiswa</h3>
          <input
            type="text"
            name="nim"
            placeholder="NIM"
            value={editData.nim || ''}
            onChange={handleChange}
          />
          <input
            type="text"
            name="nama"
            placeholder="Nama"
            value={editData.nama || ''}
            onChange={handleChange}
          />
          <input
            type="text"
            name="alamat"
            placeholder="Alamat"
            value={editData.alamat || ''}
            onChange={handleChange}
          />
          <input
            type="date"
            name="tanggal_lahir"
            value={editData.tanggal_lahir || ''}
            onChange={handleChange}
          />
          <input
            type="text"
            name="fakultas"
            placeholder="Fakultas"
            value={editData.fakultas || ''}
            onChange={handleChange}
          />
          <input
            type="text"
            name="prodi"
            placeholder="Prodi"
            value={editData.prodi || ''}
            onChange={handleChange}
          />
          <button type="submit">Update</button>
          <button onClick={() => setIsEditing(false)}>Batal</button>
        </form>
      ) : (
        <table>
          <thead>
            <tr>
              <th>NIM</th>
              <th>Nama</th>
              <th>Alamat</th>
              <th>Tanggal Lahir</th>
              <th>Fakultas</th>
              <th>Prodi</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {mahasiswa.map((mhs) => (
              <tr key={mhs.id}>
                <td>{mhs.nim}</td>
                <td>{mhs.nama}</td>
                <td>{mhs.alamat}</td>
                <td>{mhs.tanggal_lahir}</td>
                <td>{mhs.fakultas}</td>
                <td>{mhs.prodi}</td>
                <td>
                  <button onClick={() => handleEdit(mhs)}>Edit</button>
                  <button onClick={() => handleDelete(mhs.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MahasiswaList;
