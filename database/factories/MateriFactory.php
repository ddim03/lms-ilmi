<?php

namespace Database\Factories;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Materi>
 */
class MateriFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $isi = [];
        for ($i = 0; $i < 3; $i++) {
            array_push($isi, '<p style="text-align: justify;">' . fake()->text(800) . '</p>');
        }
        $isi = implode('', $isi);
        return [
            'judul' => $this->faker->sentence(10),
            'slug' => Str::slug($this->faker->sentence()),
            'isi' => $isi,
            'gambar' => fake()->imageUrl(),
            'user_id' => 1,
        ];
    }
}
