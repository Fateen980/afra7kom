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

        $booking   = new Booking;
        $bookings  = $booking

        ->Join('categories', 'bookings.category_id', '=', 'categories.id')
        ->Join('lobbies', 'bookings.lobby_id', '=', 'lobbies.id')
        ->Join('lobby_details', 'lobby_details.lobby_id', '=', 'lobbies.id')

        ->paginate(15);

        return  $bookings;

    }


    public function thisDay($id){

        return  $this->diffDays($id , 4);

    }




    public function thisWeek($id){

        return $this->diffDays($id , 2);

    }


    public function thisMonth($id){

        return  $this->diffDays($id , 1);

    }



    public function thisYear($id){

        return $this->diffDays($id ,3);

    }


    public function  diffDays($id, $flag = 1){

        $current  =  Carbon::yesterday();

        $bookings = $this->bookingDates($id);

            if($flag == 1)

            $trialExpires =  $current->diffInDays($current->copy()->addMonth());

        elseif($flag == 2)

            $trialExpires =  $current->diffInDays($current->copy()->addWeek());

        elseif($flag == 3)

            $trialExpires =  $current->diffInDays($current->copy()->addYear());

            elseif($flag == 4)

                $trialExpires =  $current->diffInDays($current->copy()->addDay());


        for($i = 1; $i <= $trialExpires; $i++){


            $date = $current->addDay()->toDateString();

            foreach($bookings as $booking){

                $dates[$booking->id] [$date] ['booked'] = $this->isBookDate($date , $booking->booking_date);
                $dates[$booking->id] [$date] ['data']   = $booking;
                $dates[$booking->id] [$date] ['names']  = $current->format( 'l' );

            }





        }

        return $dates;

    }



    public function isBookDate($firstDate,$secondDate){


               if($firstDate == $secondDate) return true;

                return false;
    }


        public function lobbiesData($bookings){


                $filledArray = array();

                foreach($bookings as $booking) {

                    $filledArray[] = $booking;

                }

                return $filledArray;
        }



}
