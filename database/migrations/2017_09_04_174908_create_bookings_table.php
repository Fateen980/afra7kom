<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBookingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('category_id')->unsigned();
            $table->integer('lobby_id')->unsigned();
            $table->integer('lobby_sub_id')->unsigned();
            $table->date('booking_date');

            $table->foreign('category_id')->references('id')->on('categories');
            $table->foreign('lobby_id')->references('id')->on('lobbies');
            $table->foreign('lobby_sub_id')->references('id')->on('lobby_details');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bookings');
    }
}
