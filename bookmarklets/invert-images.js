javascript:(function () {
    let svgs;
    const css = 'img, svg {filter: invert(100%) !important;}';
    const head = document.head || document.getElementsByTagName('head')[0];
    const invertStyleId = "jdl-img-invert";
    let style = document.getElementById(invertStyleId);
    if (!style) {
        style = document.createElement('style');
    } else {
        style.remove();
        svgs = document.querySelectorAll('svg');
        svgs.forEach(function (svg) {
            svg.style.filter = '';
        });
        return;
    }
    head.appendChild(style);
    style.id = invertStyleId;
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    svgs = document.querySelectorAll('svg');
    svgs.forEach(function (svg) {
        svg.style.filter = 'invert(100%)';
    });
})();