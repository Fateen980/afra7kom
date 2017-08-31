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

use App\hotel as Hotel;

Route::get('/','categoryController@index');
Route::get('/home/page', ['as' => 'back', 'uses' => 'categoryController@index' ]);
Route::get('/hotels','hotelController@index')->name('hotels');
Route::get('/search','searchController@index');


Route::get('/test','contactController@index');
Route::get('/hotels/search','hotelController@searchSuggestion');
Route::get('/hotels/detail/{id?}','hotelDetailController@index');

Route::get('/hotels/detail/{id?}','hotelDetailController@index');

Route::get('/payment','paymentController@index');

//API
Route::get('/category','categoryController@show');
Route::get('/gethotels',function (){

   return Hotel::all();

});



Route::get('/join', function(){

        return view('auth.register',['loadJs' => '1']);

});

Route::post('/register','RegisterController@create');
Route::get('/login', 'HomeController@index')->name('home');

Auth::routes();

Route::get('/reserve/{id?}', 'HomeController@index')->name('home');
Route::get('/home', 'HomeController@index')->name('home');
