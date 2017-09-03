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
        'country'     => '0',
        'city'        => '3',
        'rateSatr'    => $faker->numberBetween(1,5),
        'userSatr'    => $faker->numberBetween(1,5),
        'lobby'   => '0',
        'wifi'    => '0',
        'pool'    => '0',
        'restaurant'    => '0',
        'bar'    => '1',
        'parking'    => '0',
        'gym'    => '1',
        'ac'    => '1',
        'pets'    => '0'

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

        'name'         => $faker->name,
        'country'      => $faker->numberBetween(1,500),
        'city'         => $faker->numberBetween(1,500),
        'address'      => $faker->streetAddress,
        'latitude'     => $faker->latitude,
        'longitude'    => $faker->longitude,
        'description'  => $faker->paragraph,
        'price'   => $faker->randomFloat(3, 800,3000), // 48.8932,
        'from'    => 11,
        'to'    =>   3,
        'snacks'    => $faker->numberBetween(0,1),
        'dinner'    => $faker->numberBetween(0,1),
        'guests'    => 150,
        'guest_price'    => $faker->numberBetween(20,100),
        'rating'       => $faker->numberBetween(1,5),
        'userRating'   => $faker->numberBetween(1,5),
        'img'   => 'img/lobby/lobbies/15.jpg',
        'path'   => '/lobby/',
        'phone' => $faker->e164PhoneNumber,

    ];
});


$factory->define(App\lobbyDetails::class, function ($faker) use ($factory)  {

    return [
        'lobby_id' => $factory->create(App\lobby::class)->id,

        'price'   => $faker->randomFloat(3, 800,3000), // 48.8932,
        'from'    => 9,
        'to'    =>   12,
        'snacks'    => '1',
        'dinner'    => '0',
        'guests'    => 330,
        'guest_price'    => $faker->numberBetween(20,100),
        'rating'       => $faker->numberBetween(0,5),
        'userRating'   => $faker->numberBetween(0,5),
        'img'   => 'lobby15.jpg'

    ];
});
