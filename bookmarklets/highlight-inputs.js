javascript:(function () {
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(function (input) {
        let isCheckable = input.type === 'checkbox' || input.type === 'radio';
        let hasValue = !input.disabled && (isCheckable ? input.checked : input.value);
        if (hasValue) {
            input.style[isCheckable ? 'outline' : 'border'] = '3px solid rgb(0 255 133)';
        } else {
            input.style[isCheckable ? 'outline' : 'border'] = '3px solid rgb(255 0 0)';
        }
    });
})();
