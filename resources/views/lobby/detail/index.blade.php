@extends('layout.default')

@section('content')

    @include('layout.nav.nav')
    @include('layout.nav.breadcrumb',[

            'route' => 'lobby',
            'title' => 'Lobby',
            'name'  => @isset($detail) ? $detail->name : ''
    ])
    @include('lobby.detail.content')


@endsection