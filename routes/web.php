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

Route::get('/','categoryController@index');
Route::get('/hotels','hotelController@index');

Route::get('/search','searchController@index');



Route::get('/test','contactController@index');
Route::get('/hotels/search','hotelController@searchSuggestion');
Route::get('/hotels/detail/{id?}','hotelDetailController@index');


Route::get('/hotels/detail/{id?}','hotelDetailController@index');


//API

Route::get('/category','categoryController@show');


Route::get('/join', function(){

        return view('auth.register');

});

Route::get('/login', 'HomeController@index')->name('home');
Auth::routes();

Route::get('/reserve/{id?}', 'HomeController@index')->name('home');
Route::get('/home', 'HomeController@index')->name('home');
