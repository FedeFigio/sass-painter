let mix = require('laravel-mix');

mix.setPublicPath('dist');
mix.sass('src/scss/app.scss', 'css/')
    .options({
        processCssUrls: false,
    })
    .copy('src/img', 'dist/images')