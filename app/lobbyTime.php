<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class lobbyTime extends Model
{

    public function Lobby(){

        return $this->belongsTo('App\lobby');

    }


}
