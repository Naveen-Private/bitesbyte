var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

// Gentelella vendors path : vendor/bower_components/gentelella/vendors

elixir(function(mix) {
    
    /********************/
    /* Copy Stylesheets */
    /********************/

    // Bootstrap
    mix.copy('bower_components/bootstrap/dist/css/bootstrap.min.css', 'public/css/bootstrap.min.css');

    // Font awesome
    mix.copy('bower_components/font-awesome/css/font-awesome.min.css', 'public/css/font-awesome.min.css');

    //Custom Style Sheets
    mix.styles([
        "flexslider.css"
    ],'resources/assets/css/everything.css');
    mix.copy('resources/assets/css/everything.css', 'public/css/everything.css');
    //mix.copy('resources/assets/css/mediaqueries.css', 'public/css/mediaqueries.min.css');
    
    /****************/
    /* Copy Scripts */
    /****************/

    // Bootstrap
    mix.copy('bower_components/bootstrap/dist/js/bootstrap.min.js', 'public/js/bootstrap.min.js');

    // jQuery
    mix.copy('bower_components/jquery/dist/jquery.min.js', 'public/js/jquery.min.js');

    // Jquery Smart Wizard
    mix.copy('bower_components/jQuery-Smart-Wizard/js/jquery.smartWizard.js', 'public/js/jquery.smartWizard.min.js');

    // Custom Scripts
    mix.scripts([
        "counterup.min.js",
        "easing.js",
        "jquery.flexslider.js",
        "jquery.wmuSlider.js",
        "minicart.min.js",
        "move-top.js",
        "okzoom.js",
        "waypoints.min.js"
    ],'resources/assets/js/everything.js');
    mix.copy('resources/assets/js/everything.js', 'public/js/everything.js');

    /**************/
    /* Copy Fonts */
    /**************/

    /**************/
    /* Versioning Css and Js files */
    /**************/
    mix.version(['css/everything.css','js/everything.js']);
});