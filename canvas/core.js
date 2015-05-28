var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),

    time = 0;


function run(ms) {
    var dt = (ms - time) * 0.001;

    time = ms;

    ctx.clearRect(0, 0, 960, 640);

    draw(dt);

    window.requestAnimationFrame(run, canvas);
}


window.addEventListener("load", function() {
    window.requestAnimationFrame(run, canvas);
});
