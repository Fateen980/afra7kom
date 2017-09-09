<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\lobbyTime as lobbyTime;


use App\Category as Category;
use App\lobby as Lobby;
use App\lobbyDetails as lobbyDetails;
use App\booking as Booking;



use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Response;
use Carbon\Carbon;

class bookingDatesController extends Controller
{



    public function index($id){

        $current   =  Carbon::yesterday();
        $daysCount = $current->diffInDays($current->copy()->addDay());
        $bookings  = $this->bookingDates($id)->toArray();


        $lobbies = array();

        for($i = 0 ; $i < $daysCount ; $i++){

            $date = $current->addDay()->toDateString();



         if( ! empty($bookings['lobby_details']))
            foreach($bookings['lobby_details'] as $lobbyDetails){

                $lobbyDetails['booked'] = true;
                $lobbyDetails['name']   = $current->format('l');
                $lobbies[$date][$lobbyDetails['id']] = $lobbyDetails;

            }

        }

        return $lobbies;

    }



    public function bookingDates($id)
    {

        $lobby = Lobby::with('lobbyDetails','booking')
            ->find($id);
        return $lobby;

    }


public function lobbyBookedDate($id,$bookings){

        return $array = array();

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


        $current   =  Carbon::yesterday();
        $daysCount = $current->diffInDays($current->copy()->addDay());
        $bookings  = $this->bookingDates($id)->toArray();


            if($flag == 1)

                $daysCount =  $current->diffInDays($current->copy()->addMonth());

        elseif($flag == 2)

            $daysCount =  $current->diffInDays($current->copy()->addWeek());

        elseif($flag == 3)

            $daysCount =  $current->diffInDays($current->copy()->addYear());

            elseif($flag == 4)

                $daysCount =  $current->diffInDays($current->copy()->addDay());


        $lobbies = array();

        for($i = 0 ; $i < $daysCount ; $i++){

            $date = $current->addDay()->toDateString();


            if( ! empty($bookings['lobby_details']))
                foreach($bookings['lobby_details'] as $lobbyDetails){

                    $lobbyDetails['booked'] = true;
                    $lobbyDetails['name']   = $current->format('l');
                    $lobbies[$date][$lobbyDetails['id']] = $lobbyDetails;

                }

        }

        return $lobbies;

    }





    public function isBookDate($firstDate,&$bookings){

        foreach($bookings as $booking){


            if(! $booking->bookedDate->isEmpty()){

                foreach($booking->bookedDate as $date){

                    echo $firstDate;
                    if($date  == $firstDate)
                        $booking->booked = true ;

                }

            }

        }
                return true;
    }



}
