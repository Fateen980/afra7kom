@extends('layout.default')



@section('content')

    @include('layout.nav.nav')
    @include('hotels.sideSearch')
    @include('hotels.bodySearch',['loadJs' => 1])


@endsection