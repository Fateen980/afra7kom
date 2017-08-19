<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="initial-scale=1.1">
    <meta name="description" content="Afra7kom is a booking hotels for wedding">
    <meta property="og:site_name" content="Afra7kom">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" href="{!! asset('img/favicon.ico')!!}" sizes="16x16"/>
    <!-- Css -->

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/instantsearch.js/1/instantsearch.min.css">
    <link rel="stylesheet" href="{!! asset('css/mini.css')!!}">
    <link rel="stylesheet" href="{!! asset('css/hotelComponent.css')!!}">

    <script>
        window.LARACASTS = {"signedIn":false,"csrfToken":"{{ csrf_token() }}","stripeKey":"pk_live_42cAcd2OvCDs4hpErd5ZscBT","user":null};
    </script>

    <script src="{!! asset('js/lib/wow.js')!!}"></script>



    <title>Afra7kom</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">


</head>
<body class=" guest home">
<div id="root" class="page ">
    <div>

