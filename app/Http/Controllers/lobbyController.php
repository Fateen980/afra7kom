<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\lobby as Lobby;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Response;

class lobbyController extends Controller
{

    public function index (){

        return view('lobby.index')->with('loadJs',1);
    }


    public function getLobbiesName(){

           return Lobby::all()->keyBy('id');

    }


}
