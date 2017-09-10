<?php

namespace App\Http\Controllers;

use App\lobby as Lobby;
use Illuminate\Http\Request;

class paymentController extends Controller
{


    public function show(Request $request){

        $id    = $request->input('id');
        $price = $request->input('price');

        $detail = Lobby::find($id);

        return view('payment.index')
                            ->with(compact('detail'))
                            ->with(compact('price'));



    }


}
