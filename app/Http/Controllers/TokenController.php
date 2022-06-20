<?php

namespace App\Http\Controllers;

use App\Models\Token;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class TokenController extends Controller
{
    public function generateToken()
    {
        $token = Token::create([
            'token' => Str::random(48) . '--'
        ]);

        return response()->json([
            'success' => true,
            'token' => $token->token
        ]);
    }
}
