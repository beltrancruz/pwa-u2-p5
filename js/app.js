var swDirectory = 'sw.js'

if(navigator.serviceWorker){
    if(!window.location.href.includes("localhost")){
        console.log("sw_git");
        swDirectory = '/pwa-u2-p5/sw.js'
    }
    navigator.serviceWorker.register(swDirectory);
}