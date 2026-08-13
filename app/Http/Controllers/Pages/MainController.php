<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class MainController extends Controller
{
    public function index(){
    $profile = [
        'name' => 'Alxay',
        'username' => 'Alxay7',
        'avatar' => 'https://pbs.twimg.com/profile_images/1846828557575577600/uxRhcxvO_400x400.jpg',
        'banner' => 'https://pbs.twimg.com/profile_banners/1640331781953007618/1732477446/1500x500',
        'posts' => 146,
        'bio' => 'Just a regular user of X',
        'location' => 'Poland',
        'joined' => 'January 2023',
        'following' => 45,
        'followers' => 22,
    ];

return inertia('Pages/Main/index', [
    'profile' => $profile,
]);

}

    public function userProfile(Request $request){
    return inertia('Pages/Profile/index');
}

}