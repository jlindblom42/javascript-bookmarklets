javascript:(function () {
    const hiddenInputs = document.querySelectorAll('input[type="hidden"]');
    for (let i = 0; i < hiddenInputs.length; i++) {
        let input = hiddenInputs[i];
        input.type = 'text';
        input.style.backgroundColor = '#f0e68c';
        input.style.width = '200px';
        input.style.height = '25px';
        input.style.fontSize = '12x';
        input.style.position = 'relative';
        input.style.zIndex = '99999';
        input.style.color = 'black';
        const testDiv = document.createElement('div');
        testDiv.style.position = 'absolute';
        testDiv.style.visibility = 'hidden';
        testDiv.style.height = 'auto';
        testDiv.style.width = 'auto';
        testDiv.style.whiteSpace = 'nowrap';
        testDiv.textContent = input.value;
        testDiv.style.fontSize = window.getComputedStyle(input).fontSize;
        document.body.appendChild(testDiv);
        input.style.width = (testDiv.offsetWidth + 30) + 'px';
        document.body.removeChild(testDiv);
        const label = document.createElement('label');
        label.style.display = 'block';
        label.style.marginTop = '10px';
        label.style.fontSize = '11px';
        label.style.color = '#000';
        label.style.fontWeight = 'bold';
        label.style.position = 'relative';
        label.style.zIndex = '9999';
        label.style.padding = '3px';
        label.style.backgroundColor = 'white';
        label.style.display = 'table';
        label.textContent = input.name || input.id || input.className;
        input.parentNode.insertBefore(label, input);
    }
})();
