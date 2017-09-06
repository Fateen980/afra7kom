@extends('layout.default')



@section('content')

    @include('layout.nav.nav')
    @include('layout.nav.breadcrumb',[
    'routes'  =>
            [
                0 => ['url'   =>  'categoryController@index','title' => 'Home' ]
            ] ,
            'name'  =>  'Hotels'
])
    @include('hotels.sideSearch')
    @include('hotels.bodySearch',['loadJs' => 1])


@endsection