<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(HotelsTableSeeder::class);
        $this->call(hotelDetailSeeder::class);
        $this->call(lobbyTableSedder::class);
        $this->call(lobbyDetailsSeeder::class);
        $this->call(lobbyTimesTableSeeder::class);
    }
}
