javascript:(function () {
    const opacity = 0.25;
    const darkenElmId = 'js-jdl-darken';
    const opacityAttrName = 'js-jdl-opacity';
    let overlay = document.getElementById(darkenElmId);
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = darkenElmId;
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0,0,0,' + opacity + ')';
        overlay.style.zIndex = '10000';
        overlay.style.pointerEvents = 'none';
        overlay.setAttribute(opacityAttrName, opacity + '');
        document.body.appendChild(overlay);
    } else {
        const existingOpacityAttr = overlay.getAttribute(opacityAttrName);
        const existingOpacity = parseFloat(existingOpacityAttr);
        const newOpacity = (opacity + existingOpacity) % 1;
        overlay.setAttribute(opacityAttrName, newOpacity + '');
        overlay.style.backgroundColor = 'rgba(0,0,0,' + newOpacity + ')';
    }
})();