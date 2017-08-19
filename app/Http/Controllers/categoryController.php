<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category as Category;

class categoryController extends Controller
{



    public function index(){

        $categories = Category::all();

        dd($categories);
        return view('welcome',['categories' => $categories]);

    }

}
