@extends('layout.default')

@section('content')

    @include('layout.nav.nav')
    @include('layout.nav.breadcrumb',[
        'routes'  =>
                [
                    0 => ['url'   =>  'categoryController@index','title' => 'Home' ],
                    1 => ['url'   =>  'hotelController@index','title' => 'Hotels' ]
                ] ,
                          'name'  => @isset($detail) ? $detail->nameEng : ''
])

    @include('hotels.detail.content')


@endsection




