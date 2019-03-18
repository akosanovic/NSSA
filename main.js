

document.addEventListener('DOMContentLoaded', function(){ 
    var sky = $('.stars-random');
    console.log("ayooo", sky)

    windowW = $(window).width();
    windowH = $(window).height();


    const starMaker = (numberOfStars) => {
        for(let s = 0; s < numberOfStars; s += 1) {
            let top = Math.floor(Math.random() * windowH);
            let left = Math.floor(Math.random() * windowW);
            let wh = Math.floor(Math.random() * 10);

            var star = '<div class="star" style="top:'+ top +'px; left:' +left + 'px; width: ' +wh + 'px; height: ' +wh + 'px"><span></span></div>';
            console.log('star maker here', star)
            sky.append( star );
        } 
    }


    starMaker(50);

    // Start Parallax
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);

}, false);