<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLobbyDetailTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lobby_details', function (Blueprint $table) {

            $table->increments('id');
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

            $table->integer('lobby_id')->unsigned();
            $table->timestamps();

            $table->foreign('lobby_id')->references('id')->on('lobbies');
        });

 }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lobby_details');
    }
}
