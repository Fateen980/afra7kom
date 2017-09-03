<?php

use Illuminate\Database\Seeder;

class lobbyDetailsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\lobbyDetails::class,10)->create();
    }
}
