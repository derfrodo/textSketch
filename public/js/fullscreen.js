
/**
 * Funktion zur Erstellung eines "Fullscreen" Buttons 
 * Welcher auf Click ein Canvas im Fullscreen darstellt, sofern es genau eins gibt
 */
function createCanvasFullscreenFuction(c) {
    b = createButton('go fullscreen');
    b.mousePressed(()=> goFullScreen(c));
}

function goFullScreen(c) {
    if (c && c.elt) {
        const canvas = c.elt;
        if (canvas.requestFullScreen)
            canvas.requestFullScreen();
        else if (canvas.webkitRequestFullScreen)
            canvas.webkitRequestFullScreen();
        else if (canvas.mozRequestFullScreen)
            canvas.mozRequestFullScreen();
    }
}