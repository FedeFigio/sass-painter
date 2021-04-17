let mix = require('laravel-mix');


mix.sass('src/scss/app.scss', 'dist/css/')
    .copy('src/img', 'dist/images')
    .options({
        processCssUrls: false,
    })