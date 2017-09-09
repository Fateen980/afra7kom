<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{

    public function lobby(){

        return $this->hasMany('App\lobby','hotel_id','id');
    }


    public function booking(){

        return $this->hasMany('App\booking');
    }


}
