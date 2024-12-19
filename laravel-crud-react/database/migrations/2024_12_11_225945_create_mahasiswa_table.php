<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('mahasiswa', function (Blueprint $table) {
            $table->id(); // ini untuk id, primary key auto increment
            $table->string('nim')->unique(); // nim
            $table->string('nama');
            $table->string('alamat');
            $table->date('tanggal_lahir');
            $table->string('fakultas');
            $table->string('prodi');
            $table->timestamps(); // created_at, updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mahasiswa');
    }
};
