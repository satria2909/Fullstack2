<?php

namespace App\Http\Controllers;

use App\Models\Mahasiswa;
use Illuminate\Http\Request;

/**
 * @OA\Info(
 *      version="1.0.0",
 *      title="Dokumentasi API PraktikumApi",
 *      description="Satria Dava Riansa",
 *      @OA\Contact(
 *          email="email@example.com"
 *      ),
 *      @OA\License(
 *          name="Apache 2.0",
 *          url="http://www.apache.org/licenses/LICENSE-2.0.html"
 *      )
 * )
 * 
 * @OA\SecurityScheme(
 *     securityScheme="bearerAuth",
 *     type="http",
 *     scheme="bearer",
 *     bearerFormat="JWT"
 * )
 */

 class MahasiswaController extends Controller
 {
     /**
     * @OA\Get(
     * path="/api/mahasiswas",
     * summary="Dapatkan daftar semua mahasiswa",
     * description="Mengembalikan daftar semua mahasiswa",
     * operationId="getMahasiswa",
     * tags={"Mahasiswa"},
     * security={{"bearerAuth":{}}},
     * @OA\Response(
     * response=200,
     * description="Daftar mahasiswa",
     * @OA\JsonContent(
     * type="array",
     * @OA\Items(ref="#/components/schemas/Mahasiswa")
     * )
     * )
     * )
     */
    public function index()
    {
        return Mahasiswa::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'nim' => 'required|unique:mahasiswas',
            'nama' => 'required',
            'alamat' => 'required',
            'tanggal_lahir' => 'required|date',
            'fakultas' => 'required',
            'prodi' => 'required',
        ]);
        return Mahasiswa::create($request->all());
    }

    public function show($id)
    {
        return Mahasiswa::find($id);
    }

    public function update(Request $request, $id)
    {
        $mahasiswas = Mahasiswa::findOrFail($id);
        $mahasiswas->update($request->all());
        return $mahasiswas;
    }

    public function destroy($id)
    {
        Mahasiswa::destroy($id);
        return response()->json(['message' => 'Data berhasil dihapus']);
    }
}
