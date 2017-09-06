@extends('layout.default')

@section('content')

    @include('layout.nav.nav')
    @include('layout.nav.breadcrumb',[
        'routes'  =>
                [
                    0 => ['url'   =>  'categoryController@index','title' => 'Home' ]
                ] ,
                'name'  =>  'Lobby'
])


    @include('lobby.sideSearch')
    @include('lobby.bodySearch',['loadJs' => 1])


@endsection