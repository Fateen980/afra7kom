<?php

use Illuminate\Database\Seeder;

class hotelDetailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\hotelDetail::class,50)->create();
    }
}
