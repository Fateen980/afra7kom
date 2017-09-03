<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class searchController extends Controller
{

    public function index(){

       return $this->show(request('q'));

    }

    public function show($query){


        return view('hotels.search.index',compact('query'))->with('loadJs',1);

    }


}
