@extends('layout.default')

@section('content')

    @include('layout.nav.nav')
    @include('layout.nav.breadcrumb',[
            'routes'  =>
                    [
                        0 => ['url'   =>  'categoryController@index','title' => 'Home' ],
                        1 => ['url'   =>  'lobbyController@index','title' => 'Lobby' ]
                    ] ,
                    'name'  => @isset($detail) ? $detail->name : ''
    ])
    @include('lobby.detail.content')


@endsection