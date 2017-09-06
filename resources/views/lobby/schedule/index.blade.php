@extends('layout.default')

@section('content')

    @include('layout.nav.nav')
    @include('layout.nav.breadcrumb',[

            'routes'  =>
            [
                0 => ['url'   =>  'categoryController@index','title' => 'Home' ],
                1 => ['url'   =>  'lobbyController@index'   ,   'title'  => 'Lobby' ],
                2 => ['url'   =>  'lobbyController@show'    ,   'id' => $detail->id,   'title' =>  $detail->name ]
            ] ,


             'name'  => 'Schedule'
    ])

    @include('lobby.schedule.content')


@endsection