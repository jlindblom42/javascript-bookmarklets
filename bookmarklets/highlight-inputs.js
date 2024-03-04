javascript:(function () {
    const inputs = document.querySelectorAll('input[type=text], input[type=email], input[type=password], input[type=tel], input[type=date], textarea, input[type=radio]:checked, input[type=checkbox]:checked, select');
    inputs.forEach(function (input) {
        const value = input.type === 'checkbox' || input.type === 'radio' ? input.checked : input.value;
        if (value) {
            input.style.boxShadow = '0 0 3px #4287f5';
            input.style.border = '3px solid rgb(0 255 133)';
        } else {
            input.style.boxShadow = '0 0 3px #4287f5';
            input.style.border = '3px solid rgb(255 0 0)';
        }
    });
})();
