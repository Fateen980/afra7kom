<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\hotel as Hotel;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Response;



class hotelController extends Controller
{

        public function index(){

            $hotels = DB::table('hotels')->paginate(15);

            return view('hotels.index',compact('hotels'));

        }

        public function search(Request $request)
        {
            // First we define the error message we are going to show if no keywords
            // existed or if no results found.
            $error = ['error' => ''];

            // Making sure the user entered a keyword.
            if($request->has('q')) {

                // Using the Laravel Scout syntax to search the products table.
                $hotels = Hotel::search($request->get('q'))->get();

                // If there are results return them, if none, return the error message.

                 return $hotels->count() ? $hotels : $error;
            }


            // Return the error message if no keywords existed
            return $error;
        }


    public function searchSuggestion(Request $request)
    {

        $suggestions = ['error' => ''];


        if($request->has('term')) {

            $keywords    = $request->get('term');

            $suggestions = Hotel::search($keywords)->raw();

        }

            dd($suggestions);
        return $suggestions;
    }


}
