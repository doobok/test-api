<?php

namespace App\Http\Controllers;

use App\Models\Info;
use Illuminate\Http\Request;

class InfosController extends Controller
{
    public function save(Request $request)
    {
        Info::create([
            'body' => $request->code
        ]);

        return redirect('https://speroteck-f-dev-ed.lightning.force.com/lightning/n/Roi4Presenter');

//        return response('success', 200);
    }
}
