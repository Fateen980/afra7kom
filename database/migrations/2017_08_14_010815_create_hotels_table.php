<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHotelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hotels', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nameEng');
            $table->string('nameAr');
            $table->text('desc');
            $table->string('path');
            $table->integer('country');
            $table->integer('city');
            $table->integer('rateSatr');
            $table->integer('userSatr');
            $table->integer('lobby');
            $table->integer('wifi');
            $table->integer('pool');
            $table->integer('restaurant');
            $table->integer('bar');
            $table->integer('parking');
            $table->integer('gym');
            $table->integer('ac');
            $table->integer('pets');

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
        Schema::dropIfExists('hotels');
    }
}
