javascript:(function () {
    const inputs = document.querySelectorAll('input, textarea, input[type=radio]:checked, input[type=checkbox]:checked');
    let scriptContent = 'javascript:(function(){';
    let index = 0;
    inputs.forEach(function (input) {
        index++;
        const inputVar = 'input' + index;
        const value = input.value;
        if (value === '') {
            return;
        }
        let selector = '';
        if (input.form && (input.form.id || input.form.name)) {
            selector += input.form.tagName.toLowerCase();
            if (input.form.name) {
                selector += '[name=' + input.form.name + ']';
            } else if (input.form.id) {
                selector += '[id=' + input.form.id + ']';
            }
            selector += ' ';
        }
        selector += input.tagName.toLowerCase();
        let notSpecific = true;
        if (input.name) {
            selector += '[name="' + input.name + '"]';
            notSpecific = false;
        } else if (input.id) {
            selector += '[id="' + input.id + '"]';
            notSpecific = false;
        }
        if (notSpecific) {
            return;
        }
        if (input.checked && (input.type === 'checkbox' || input.type === 'radio')) {
            scriptContent += 'const ' + inputVar + ' = document.querySelector(\'' + selector + '\');';
            scriptContent += 'if (' + inputVar + ') {';
            scriptContent += inputVar + '.checked=true;';
            scriptContent += inputVar + '.dispatchEvent(new Event(\'change\'));';
            scriptContent += '}';
        } else if (input.type !== 'hidden') {
            scriptContent += 'const ' + inputVar + ' = document.querySelector(\'' + selector + '\');';
            scriptContent += 'if (' + inputVar + ') {';
            scriptContent += inputVar + '.value="' + value.replace(/"/g, '\\"') + '";';
            scriptContent += inputVar + '.dispatchEvent(new Event(\'change\'));';
            scriptContent += '}';
        }
    });
    const selects = document.querySelectorAll('select');
    index = 0;
    selects.forEach(function (select) {
        index++;
        const value = select.value;
        if (value === '') {
            return;
        }
        let selector = select.tagName.toLowerCase();
        if (select.name) {
            selector += '[name="' + select.name + '"]';
        } else if (select.id) {
            selector += '[id="' + select.id + '"]';
        }
        var selectVar = 'select' + index;
        scriptContent += 'const ' + selectVar + ' = document.querySelector(\'' + selector + '\');';
        scriptContent += 'if (' + selectVar + ') {';
        scriptContent += 'const ' + selectVar + 'Opts = Array.from(' + selectVar + '.options).find(opt => opt.value === "' + value.replace(/"/g, '\\"') + '");';
        scriptContent += 'if (' + selectVar + 'Opts) {';
        scriptContent += selectVar + 'Opts.selected = true;';
        scriptContent += '}';
        scriptContent += selectVar + '.dispatchEvent(new Event(\'change\'));';
        scriptContent += '}';
    });
    scriptContent += '})();';
    console.log(scriptContent);
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(scriptContent).then(function () {
            console.log('Bookmarklet copied to clipboard.');
        }).catch(function (error) {
            console.error('Error copying text: ', error);
        });
    }
})();