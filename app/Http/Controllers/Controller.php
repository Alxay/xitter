<?php

namespace App\Http\Controllers;

abstract class Controller
{
    function index()
    {
        return inertia('mainPage');
    }
}
