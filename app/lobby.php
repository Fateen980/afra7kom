<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
class lobby extends Model
{

    use Searchable;


    public function booking(){

        $this->hasMany('App\booking');
    }

    public function LobbyTime(){

        return $this->hasMany('App\lobbyTime');

    }



}
