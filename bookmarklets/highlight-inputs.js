javascript:(function () {
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(function (input) {
        let hasValue = !input.disabled && (input.type === 'checkbox' || input.type === 'radio' ? input.checked : input.value);
        if (hasValue) {
            input.style.outline = '3px solid rgb(0 255 133)';
        } else {
            input.style.outline = '3px solid rgb(255 0 0)';
        }
    });
})();
