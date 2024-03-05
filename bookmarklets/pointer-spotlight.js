javascript:(function () {
    const overlayId = 'jdl-pointer-spotlight';
    let overlay = document.getElementById(overlayId);
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = overlayId;
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
        overlay.style.background = 'rgba(0, 0, 0, 0.7)';
        overlay.style.pointerEvents = 'none';
        overlay.style.mixBlendMode = 'darken';
        document.body.appendChild(overlay);

        overlay.style.cursor = 'none';
        overlay.style.zIndex = '9999';

        document.onmousemove = function (e) {
            overlay.style.background = `radial-gradient(circle 100px at ${e.clientX}px ${e.clientY}px, transparent, rgba(0, 0, 0, 0.7) 70%)`;
        };
    } else {
        overlay.remove();
        document.onmousemove = null;
    }
})();