<?php

namespace App\Http\Controllers;

use App\hotelDetail as Detail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class hotelDetailController extends Controller
{


    public function index($id){

        $detail =  DB::table('hotels')->where('id',$id)->first();

        return view('hotels.detail.index',compact('detail'))->with('loadJs',1);

    }

}
