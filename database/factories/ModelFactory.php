<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});

$factory->define(App\hotel::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'nameEng'     => $faker->unique()->name,
        'nameAr'      => $faker->name,
        'desc'        => $faker->paragraph,
        'path'        => 'hotel01.jpg',
        'country'     => '1',
        'city'        => '1',
        'rateSatr'    => $faker->numberBetween(1,5),
        'userSatr'    => $faker->numberBetween(1,5)

    ];
});

$factory->define(App\hotelDetail::class, function ($faker) use ($factory)  {

    return [
        'hotel_id' => $factory->create(App\hotel::class)->id,

        'lobby'   => '1',
        'wifi'    => '1',
        'pool'    => '1',
        'restaurant'    => '1',
        'bar'    => '1',
        'parking'    => '1',
        'gym'    => '1',
        'ac'    => '1',
        'pets'    => '1',
        'address'    => $faker->address,
        'email'    => $faker->email,
        'number'    => $faker->phoneNumber,
        'latitude'    => $faker->latitude,
        'longitude'    => $faker->longitude,


    ];
});

$factory->define(App\lobby::class, function ($faker) use ($factory)  {

    return [
        'hotel_id' => $factory->create(App\hotel::class)->id,


        'name'    => $faker->name,
        'price'    => $faker->numberBetween($min = 0, $max = 12000),

    ];
});