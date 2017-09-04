<?php

use Illuminate\Database\Seeder;

class lobbyTimesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\lobbyTime::class,500)->create();
    }
}
