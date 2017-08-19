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

Route::get('/search', [
    'as' => 'search',
    'uses' => 'hotelController@search'
]);

Route::get('/test','contactController@index');
Route::get('/hotels/search','hotelController@searchSuggestion');




