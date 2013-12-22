#!/usr/bin/env node

var videoclub = require('./videoclub.js');

var movieTitle = process.argv.splice(2).join(' ');

var STORES = {
    // canalplay: {name: 'Canal Play', url: 'vod.canalplay.com'},
    virginmega: {name: 'Virgin Mega', url: "www.virginmega.fr", priceSelector: '.cont big', titleSelector: '.videofile h2'},
    videofutur: {name: 'Video Futur', url: 'www.videofutur.fr', priceSelector: '.vodRent .butTop:contains("unit")', titleSelector: '.title h2'},
    tf1vod: {name: 'TF1 VOD', url: "mytf1vod.tf1.fr", priceSelector: '#head-ctn:contains("Louer") span', titleSelector: '#media-title'}
};

for (var store in STORES) {
    videoclub.fetchMoviePrice(movieTitle, STORES[store], console.log);
}