window.onload = () => {
    'use strict';
    if('serviceWorker' in navigator){
        navigator.serviceWorker.register('./sw.js')
        .then(function(details){
            console.log('service worker registered ', details);

        })
        .catch(function(err){
            console.log(err);
        })
    }
}