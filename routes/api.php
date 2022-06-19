<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/token', [ \App\Http\Controllers\TokenController::class, 'generateToken']);
Route::get('/users', [\App\Http\Controllers\UsersController::class, 'paginationPage']);
Route::post('/users', [\App\Http\Controllers\UsersController::class, 'create']);
Route::get('/users/{id}', [\App\Http\Controllers\UsersController::class, 'getUser']);
Route::get('/positions', [\App\Http\Controllers\PositionController::class, 'getPositions']);
