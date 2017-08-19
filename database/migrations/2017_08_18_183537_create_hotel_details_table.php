<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHotelDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hotel_details', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('lobby');
            $table->integer('wifi');
            $table->integer('pool');
            $table->integer('restaurant');
            $table->integer('bar');
            $table->integer('parking');
            $table->integer('gym');
            $table->integer('ac');
            $table->integer('pets');
            $table->text('address');
            $table->string('email');
            $table->string('number');
            $table->string('latitude');
            $table->string('longitude');
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
        Schema::dropIfExists('hotel_details');
    }
}
