@extends('layout.default')



@section('content')

    @include('layout.nav.nav')
    @include('lobby.sideSearch')
    @include('lobby.bodySearch',['loadJs' => 1])


@endsection