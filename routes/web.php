<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\LatihanSoalController;
use App\Http\Controllers\MahasiswaController;
use App\Http\Controllers\MateriController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::redirect('/', '/login', 301);

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::resource('/mahasiswa', MahasiswaController::class);
    Route::resource('/materi', MateriController::class);
    Route::resource('/latihan-soal', LatihanSoalController::class);
});

require __DIR__ . '/auth.php';
