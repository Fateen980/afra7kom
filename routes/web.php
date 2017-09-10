<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


//Categories

Route::get('/','categoryController@index');
Route::get('/hotels','hotelController@index')->name('hotels');
Route::get('/lobby','lobbyController@index')->name('lobby');
Route::get('/lobby/{id?}','lobbyController@show');
Route::get('/lobby/schedule/{id?}','lobbyScheduleController@index');
Route::POST('/payment','paymentController@show')->name('payment');
Route::get('/lobbyName','lobbyController@getLobbiesName')->name('lobbyName');

// Sub Categories

Route::get('/hotels/search','hotelController@searchSuggestion');
Route::get('/hotels/detail/{id?}','hotelDetailController@index');
Route::get('/hotels/detail/{id?}','hotelDetailController@index');



Route::get('/home/page', ['as' => 'back', 'uses' => 'categoryController@index' ]);
Route::get('/search','searchController@index');
Route::get('/test/{id?}','bookingDatesController@index');

//Lobby
Route::get('/thisMonth/{id?}','bookingDatesController@thisMonth');
Route::get('/thisWeek/{id?}','bookingDatesController@thisWeek');
Route::get('/thisYear/{id?}','bookingDatesController@thisYear');
Route::get('/thisDay/{id?}','bookingDatesController@thisDay');




//API
Route::get('/category','categoryController@show');
Route::get('/gethotels',function (){ return App\hotel::all();});
Route::get('/getlobbies',function (){ return App\lobby::all();});







Route::get('/join', function(){

        return view('auth.register',['loadJs' => '1']);

});

Route::post('/register','RegisterController@create');
Route::get('/login', 'HomeController@index')->name('home');

Auth::routes();

Route::get('/reserve/{id?}', 'HomeController@index')->name('home');
Route::get('/home', 'HomeController@index')->name('home');
