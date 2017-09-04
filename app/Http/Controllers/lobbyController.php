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

class lobbyController extends Controller
{

    public function index (){

        return view('lobby.index')->with('loadJs',1);
    }

    public function show($id){

        $current = Carbon::now();
        $trialExpires =  $current->diffInDays($current->copy()->addMonth());


        for($i = 1; $i <= $trialExpires; $i++){

            $dates[] = $current->addDay()->toDateString();

        }


        $detail = Lobby::find($id);
        $times = lobbyTime::where('lobby_id',$id)->get();



        if(empty($detail)) return redirect('lobby');

        return view('lobby.detail.index',compact('detail'))
                            ->with(compact('times'))
                            ->with(compact('dates'))
                            ->with('loadJs',1);

        }


    public function getLobbiesName(){

           return Lobby::all()->keyBy('id');

    }


    public function bookingDates(){

        $bookings = Booking::all()->pluck('from');

        return  $bookings;

    }



    public function dates(){


        $bookings = $this->bookingDates()->toArray();

        $current = Carbon::now();
        $trialExpires =  $current->diffInDays($current->copy()->addMonth());


        for($i = 1; $i <= $trialExpires; $i++){


           $date = $dates['dates'][$i] = $current->addDay()->toDateString();

           if(in_array($date,$bookings))
               $dates['booked'][$i] = $date;
           else
               $dates['booked'][$i] = false;

        }

            return $dates;
    }




}
