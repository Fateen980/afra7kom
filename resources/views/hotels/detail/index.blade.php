@extends('layout.default')

@section('content')

    @include('layout.nav.nav')
    @include('layout.nav.breadcrumb',[

        'route' => 'hotels',
        'title' => 'Hotels',
        'name'  => $detail->nameEng
])
    @include('hotels.detail.content')


@endsection




