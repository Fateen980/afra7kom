<?php

use Illuminate\Database\Seeder;

class lobbyTableSedder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\lobby::class,50)->create();
    }
}
