<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class userDetail extends Model
{

    protected $fillable = ['phone', 'city', 'country','address'];





    public function User(){

        return $this->belongsTo('App\User');

    }




}
