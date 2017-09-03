<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLobbiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        
        Schema::create('lobbies', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->integer('country');
            $table->integer('city');
            $table->text('address');
            $table->string('latitude');
            $table->string('longitude');
            $table->text('description');
            $table->double('price', 15, 8);
            $table->integer('from');
            $table->integer('to');
            $table->integer('snacks');
            $table->integer('dinner');
            $table->integer('guests');
            $table->integer('rating');
            $table->integer('userRating');
            $table->double('guest_price', 15, 8);
            $table->string('img');
//            $table->json('_geoloc');
            $table->string('path');
            $table->string('phone');



            $table->integer('hotel_id')->unsigned();





            $table->timestamps();

            $table->foreign('hotel_id')->references('id')->on('hotels');
        });



    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lobbies');
    }
}
