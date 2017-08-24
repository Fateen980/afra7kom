@extends('layout.default')

@section('content')

    {{--@include('layout.nav.nav')--}}

    {{--@include('hotels.detail.content')--}}

    <div class="section">


        <div class="filterable container">
            <div id="app">
            <ScanView query="{{ $query }}"></ScanView>
            </div>


        </div>

    </div>

@endsection




