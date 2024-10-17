<?php

namespace App\Http\Controllers;

use App\Models\LatihanSoal;
use App\Http\Requests\StoreLatihanSoalRequest;
use App\Http\Requests\UpdateLatihanSoalRequest;

class LatihanSoalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('LatihanSoal/Index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreLatihanSoalRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(LatihanSoal $latihanSoal)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(LatihanSoal $latihanSoal)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLatihanSoalRequest $request, LatihanSoal $latihanSoal)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(LatihanSoal $latihanSoal)
    {
        //
    }
}
