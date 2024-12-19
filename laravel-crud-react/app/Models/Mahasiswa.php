<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
* @OA\Schema(
* title="Mahasiswa",
* description="Model Mahasiswa",
* @OA\Property(property="nim", type="string", example="G.211.22.0006"),
* @OA\Property(property="nama", type="string", example="Satria Dava Riansa"),
* @OA\Property(property="alamat", type="string", example="Jl Petempen"),
* @OA\Property(property="tanggal_lahir", type="string", format="date", example="2003-09-29"),
* @OA\Property(property="jurusan", type="string", example="Informatika")
* )
*/

class Mahasiswa extends Model
{
    use HasFactory;

    protected $fillable = ['nim', 'nama', 'alamat', 'tanggal_lahir', 'fakultas', 'prodi'];

}
