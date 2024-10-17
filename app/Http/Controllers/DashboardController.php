<?php

namespace App\Http\Controllers;

use App\Models\LatihanSoal;
use App\Models\Materi;
use App\Models\User;

class DashboardController extends Controller
{
    public function index()
    {
        $statistics = [
            'total_mahasiswa' => User::where('role', 'mahasiswa')->count() ?? 0,
            'jumlah_materi' => Materi::count() ?? 0,
            'jumlah_latihan_soal' => LatihanSoal::count() ?? 0,
        ];
        return inertia('Dashboard/Dosen', [
            'statistics' => $statistics
        ]);
    }
}
