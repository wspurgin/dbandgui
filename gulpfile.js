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

var elixirTypscript = require('elixir-typescript-angular2');

elixir(function(mix) {
    mix.sass('app.scss');
    mix.styles('app.css', 'public/build/css/app.css', 'public/css');

    mix.copy('node_modules/@angular', 'public/node_modules/@angular');
    mix.copy('node_modules/core-js', 'public/node_modules/core-js');
    mix.copy('node_modules/rxjs', 'public/node_modules/rxjs');
    mix.copy('node_modules/systemjs', 'public/node_modules/systemjs');
    mix.copy('node_modules/zone.js/', 'public/node_modules/zone.js/');
    mix.copy('node_modules/reflect-metadata',
      'public/node_modules/reflect-metadata');

    mix.typescript(['main.ts', 'app.component.ts', 'app.module.ts'], './public/app');
});
