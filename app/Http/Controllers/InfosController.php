<?php

namespace App\Http\Controllers;

use App\Models\Info;
use Illuminate\Http\Request;

class InfosController extends Controller
{
    public function save(Request $request)
    {
        Info::create([
            'body' => $request->fullUrl()
        ]);

        return response('success', 200);
    }
}