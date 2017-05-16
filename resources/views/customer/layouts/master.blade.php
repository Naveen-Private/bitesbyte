<!DOCTYPE html>
<html lang="en">

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

        <!-- Meta, title, CSS, favicons, etc. -->
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Bites Byte!</title>

        <!-- Bootstrap -->
        <link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet">
        <!-- Montserrat Google Font -->
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
        <!-- Font Awesome -->
        <link href="{{ asset('css/font-awesome.min.css') }}" rel="stylesheet">
        <link href="{{ asset('css/style.css') }}" rel="stylesheet">
        <!-- Custom Theme Style -->
        <!-- <link href="{{ asset("css/gentelella.min.css") }}" rel="stylesheet"> -->
        <!-- Custom Style Sheets-->
        <link rel="stylesheet" href="{{ elixir('css/everything.css') }}">

        @stack('stylesheets')

    </head>

    <body class="nav-md">
        <div id="mainView">
            <div class="main_container">

                @include('customer/includes/header')

                @yield('main_container')

                @include('customer/includes/footer')

            </div>
        </div>

        <!-- jQuery -->
        <script src="{{ asset('js/jquery.min.js') }}"></script>
        <!-- Bootstrap -->
        <script src="{{ asset('js/bootstrap.min.js') }}"></script>
        <!-- Custom Scripts -->
        <script src="{{ asset('js/jquery.smartWizard.min.js') }}"></script>

        <script src="{{ elixir('js/everything.js') }}"></script>
    
        @stack('scripts')

    </body>
</html>