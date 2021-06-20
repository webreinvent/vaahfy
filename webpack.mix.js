const mix = require('laravel-mix');
const fs = require('fs');
const fs_extra = require('fs-extra');

mix.setPublicPath('./css');
mix.sass('./build.scss', './css');
mix.sass('./style.scss', './css');


mix.webpackConfig({
    watchOptions: {

        aggregateTimeout: 2000,
        poll: 20,
        ignored: [
            '/node_modules/',
            '/css/',

        ]
    }
});