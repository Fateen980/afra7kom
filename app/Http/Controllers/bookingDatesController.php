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

class bookingDatesController extends Controller
{


    public function bookingDates($id){

        $booking = new Booking;
        $bookings  = $booking->where('sub_id' ,$id)->pluck('from');


        return  $bookings;

    }


    public function thisDay($id){

        return $trialExpires = $this->diffDays($id , 4);

    }



    public function thisWeek($id){

        return $trialExpires = $this->diffDays($id , 2);

    }


    public function thisMonth($id){

        return $trialExpires = $this->diffDays($id , 1);

    }



    public function thisYear($id){

        return $trialExpires = $this->diffDays($id ,3);

    }


    public function  diffDays($id, $flag = 1){

        $current  =  Carbon::yesterday();

        $bookings = $this->bookingDates($id)->toArray();

            if($flag == 1)

            $trialExpires =  $current->diffInDays($current->copy()->addMonth());

        elseif($flag == 2)

            $trialExpires =  $current->diffInDays($current->copy()->addWeek());

        elseif($flag == 3)

            $trialExpires =  $current->diffInDays($current->copy()->addYear());

            elseif($flag == 4)

                $trialExpires =  $current->diffInDays($current->copy()->addDay());

        for($i = 1; $i <= $trialExpires; $i++){


            $date = $dates['dates'][$i] = $current->addDay()->toDateString();

            if(in_array($date,$bookings))
                $dates['booked'][$i] = true;
            else
                $dates['booked'][$i] = false;

        }

        return $dates;

    }





}
