<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category as Category;

class categoryController extends Controller
{



    public function index(){

        $categories = Category::all();

        return view('welcome',['categories' => $categories]);

    }


    public function show(Request $request, Category $category){


        $categories =  $category->all();

        return response()->json($categories, 200);

    }


}
