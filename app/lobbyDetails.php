<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class lobbyDetails extends Model
{
    use Searchable;


    public function booking(){

        return $this->hasMany('App\booking','lobby_sub_id');
    }

    public function lobby(){

       return  $this->belongsTo('App\lobby');
    }


}
