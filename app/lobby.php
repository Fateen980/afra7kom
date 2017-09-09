<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
class lobby extends Model
{

    use Searchable;


    public function Category(){

        return $this->belongsTo('App\Category','hotel_id','id');
    }



    public function lobbyDetails(){

        return $this->hasMany('App\lobbyDetails');
    }


    public function booking(){

        return $this->hasMany('App\booking');
    }

    public function LobbyTime(){

        return $this->hasMany('App\lobbyTime');

    }



}
