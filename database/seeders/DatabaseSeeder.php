<?php

namespace Database\Seeders;

use App\Models\Materi;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Dimas Gilang Dwi Aji',
            'email' => 'dimas@gmail.com',
            'role' => 'dosen',
            'password' => Hash::make('password'),
        ]);

        for ($i = 0; $i < 20; $i++) {
            User::factory()->create([
                'role' => 'mahasiswa',
                'password' => Hash::make('password')
            ]);
        }
        Materi::factory(20)->create();
    }
}
