<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class HotelsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\hotel::class,50)->create();
    }
}
