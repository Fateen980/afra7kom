<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class booking extends Model
{



    public function Category(){

        return $this->belongsTo('App\Category','lobby_sub_id');
    }


    public function lobby(){

        return $this->belongsTo('App\lobby');
    }

    public function lobbyDetails(){

        return $this->belongsTo('App\lobbyDetails');
    }


}
