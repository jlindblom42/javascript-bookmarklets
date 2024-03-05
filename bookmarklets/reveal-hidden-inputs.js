javascript:(function () {
    const hiddenInputs = document.querySelectorAll('input[type="hidden"]');
    for (let i = 0; i < hiddenInputs.length; i++) {
        hiddenInputs[i].type = 'text';
        hiddenInputs[i].style.backgroundColor = '#f0e68c';
        hiddenInputs[i].style.width = '200px';
        hiddenInputs[i].style.height = '25px';
        hiddenInputs[i].style.fontSize = '12x';
        hiddenInputs[i].style.position = 'relative';
        hiddenInputs[i].style.zIndex = '99999';
        const label = document.createElement('label');
        label.style.display = 'block';
        label.style.marginTop = '10px';
        label.style.fontSize = '11px';
        label.style.color = '#000';
        label.style.fontWeight = 'bold';
        label.style.position = 'relative';
        label.style.zIndex = '9999';
        label.textContent = hiddenInputs[i].name || hiddenInputs[i].id;
        hiddenInputs[i].parentNode.insertBefore(label, hiddenInputs[i]);
    }
})();
