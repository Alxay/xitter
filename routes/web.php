<?php
use App\http\Controllers\Pages\MainController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::get('/main', [MainController::class, 'index'])->name('index');
Route::get('/user', [MainController::class, 'userProfile'])->name('user.profile');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
