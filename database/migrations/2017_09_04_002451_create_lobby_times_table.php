<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLobbyTimesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('lobby_times', function (Blueprint $table) {

            $table->increments('id');
            $table->time('from');
            $table->time('to');

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
        Schema::dropIfExists('lobby_times');
    }
}
