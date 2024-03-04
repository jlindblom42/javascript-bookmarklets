javascript:(function () {
    const darkModeStyleId = 'jdl-dark-mode';
    let style = document.getElementById(darkModeStyleId);
    if (!style) {
        style = document.createElement('style');
    } else {
        style.remove();
        return;
    }
    style.id = darkModeStyleId;
    style.type = "text/css";
    style.innerHTML = ":not([id^=\"js-jdl\"]) { background-color: #121212 !important; color: #e8e6e3 !important; } a:link, a:visited { color: #9a9ff0; }";
    document.head.appendChild(style);
})();