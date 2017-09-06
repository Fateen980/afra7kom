<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\lobby as Lobby;
use App\lobbyTime as lobbyTime;
use App\booking as Booking;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Response;
use Carbon\Carbon;

class lobbyScheduleController extends Controller
{


        public function index($id){

            $detail = Lobby::find($id);

        return view('lobby.schedule.index')
                   ->with('loadJs',1)
                   ->with('detail',$detail);
    }






}
