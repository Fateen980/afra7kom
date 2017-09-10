@extends('layout.default')

@section('content')

    @include('layout.nav.breadcrumb',[

            'routes'  =>
            [
                0 => ['url'   =>  'categoryController@index'         ,   'title'  => 'Home'   ],
                1 => ['url'   =>  'lobbyController@index'            ,   'title'  => 'Lobby'  ],
                2 => ['url'   =>  'lobbyController@show'             ,   'id' => $detail->id,   'title' =>  $detail->name ],
                3 => ['url'   =>  'lobbyScheduleController@index'    ,   'id' => $detail->id,   'title' =>  'Schedule' ]
            ] ,


             'name'  => 'Payment Process'
    ])

    @include('payment.content')


@endsection