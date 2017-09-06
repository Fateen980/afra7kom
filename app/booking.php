<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class booking extends Model
{



    public function category(){

        $this->belongsTo('App\Category');
    }


    public function lobby(){

        $this->belongsTo('App\lobby');
    }

    public function lobbyDetails(){

        $this->belongsTo('App\lobbyDetails');
    }


}
