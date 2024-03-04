# Javascript Bookmarklets

Just a collection of javascript bookmarklets for personal use. Feel free to use, modify, or contribute.

To use, copypaste the desired script into a new bookmark.

* [Darken](`(function () { const opacity = 0.25; const darkenElmId = 'js-jdl-darken'; const opacityAttrName = 'js-jdl-opacity'; let overlay = document.getElementById(darkenElmId); if (!overlay) { overlay = document.createElement('div'); overlay.id = darkenElmId; overlay.style.position = 'fixed'; overlay.style.top = '0'; overlay.style.left = '0'; overlay.style.width = '100%'; overlay.style.height = '100%'; overlay.style.backgroundColor = 'rgba(0,0,0,' + opacity + ')'; overlay.style.zIndex = '10000'; overlay.style.pointerEvents = 'none'; overlay.setAttribute(opacityAttrName, opacity + ''); document.body.appendChild(overlay); } else { const existingOpacityAttr = overlay.getAttribute(opacityAttrName); const existingOpacity = parseFloat(existingOpacityAttr); const newOpacity = (opacity + existingOpacity) % 1; overlay.setAttribute(opacityAttrName, newOpacity + ''); overlay.style.backgroundColor = 'rgba(0,0,0,' + newOpacity + ')'; } })();`)
* [Invert Images](bookmarklets/invert-images.js)

Use at your own risk. I do not guarantee the safety of using these bookmarklets.