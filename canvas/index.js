var x = 0,
    vx = 256;


function draw(dt) {

    if (x > (960 - 32) || x < 0) {
        vx *= -1;
    }

    x += vx * dt;

    ctx.fillStyle = "rgb(128, 128, 128)";
    ctx.fillRect(x, 0, 32, 32);
}
