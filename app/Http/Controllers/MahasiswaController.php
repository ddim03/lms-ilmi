<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMahasiswaRequest;
use App\Http\Requests\UpdateMahasiswaRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class MahasiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $query = User::query();
        $query->where('role', 'mahasiswa');

        if (request('q')) {
            $query->whereAny(['name', 'address', 'email'], 'like', '%' . request('q') . '%');
        }
        $users = $query
            ->orderBy('created_at', 'desc')
            ->paginate(10)
            ->onEachSide(1);

        $users->appends(request()->query());

        return inertia('Mahasiswa/Index', [
            'mahasiswa' => UserResource::collection($users),
            'queryParams' => request()->query() ?: null,
            'success' => session('success') ?: null
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:8',
            'address' => 'required|max:255'
        ]);
        $validated['role'] = 'mahasiswa';
        $validated['password'] = Hash::make($validated['password']);

        User::create($validated);
        return redirect()->route('mahasiswa.index')->with('success', 'Mahasiswa berhasil ditambahkan');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $mahasiswa)
    {
        $rules = [
            'name' => 'required|max:255',
            'email' => 'required|max:255|email|unique:users,email,' . $mahasiswa->id,
            'address' => 'required|max:255'
        ];

        if ($request->password) {
            $rules['password'] = 'min:8';
        }

        $validated = $request->validate($rules);
        if ($request->password) {
            $validated['password'] = Hash::make($validated['password']);
        }
        $mahasiswa->update($validated);
        return redirect()->back()->with('success', 'Mahasiswa berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $mahasiswa)
    {
        $mahasiswa->delete();
        return redirect()->route('mahasiswa.index')->with('success', "Mahasiswa berhasil dihapus");
    }
}
