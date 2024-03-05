javascript:(function () {
    const inputs = document.querySelectorAll('input, textarea');
    const selectorSet = new Set();
    let scriptContent = '';
    scriptContent += 'javascript:(function(){';
    let index = 0;
    inputs.forEach(function (input) {
        index++;
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
        if (selectorSet.has(selector)) {
            return;
        }
        selectorSet.add(selector);
        let allInputs = document.querySelectorAll(selector);
        if (!allInputs || allInputs.length < 1) {
            return;
        }
        const inputVar = 'input' + index;
        let filtered = [...allInputs].filter(function (nestedInput) {
            const value = nestedInput.value;
            const type = nestedInput.type;
            if (type === 'checkbox' || type === 'radio') {
                return true;
            } else if (type !== 'hidden') {
                return true;
            }
            return false;
        });
        if (filtered.length < 1) {
            return;
        }
        let nestedIndex = 0;
        scriptContent += 'const ' + inputVar + ' = document.querySelectorAll(\'' + selector + '\');';
        filtered.forEach(function (nestedInput) {
            const value = nestedInput.value || '';
            const type = nestedInput.type;
            const nestedInputVar = inputVar + '[' + nestedIndex + ']';

            if (type === 'checkbox' || nestedInput.checked && type === 'radio') {
                scriptContent += 'if (' + nestedInputVar + ') {';
                scriptContent += nestedInputVar + '.checked=' + nestedInput.checked + ';';
                scriptContent += nestedInputVar + '.dispatchEvent(new Event(\'change\'));';
                scriptContent += '}';
                nestedIndex++;
            } else if (type !== 'hidden') {
                scriptContent += 'if (' + nestedInputVar + ') {';
                scriptContent += nestedInputVar + '.value="' + value.replace(/"/g, '\\"') + '";';
                scriptContent += nestedInputVar + '.dispatchEvent(new Event(\'change\'));';
                scriptContent += '}';
                nestedIndex++;
            }
        });
    });
    const selects = document.querySelectorAll('select');
    index = 0;
    selects.forEach(function (select) {
        index++;
        let selector = select.tagName.toLowerCase();
        if (select.name) {
            selector += '[name="' + select.name + '"]';
        } else if (select.id) {
            selector += '[id="' + select.id + '"]';
        }
        if (selectorSet.has(selector)) {
            return;
        }
        selectorSet.add(selector);
        let selectedOptsSelector = selector + ' option';
        var selectVar = 'selectOpts' + index;
        scriptContent += 'const ' + selectVar + ' = document.querySelectorAll(\'' + selectedOptsSelector + '\');';
        const selectedOpts = document.querySelectorAll(selectedOptsSelector);
        selectedOpts.forEach(function (selectedOpt) {
            if (select.multiple || selectedOpt.selected) {
                scriptContent += selectVar + '[' + selectedOpt.index + '].selected = ' + selectedOpt.selected + ';';
            }
        });
        scriptContent += 'document.querySelector(\'' + selector + '\').dispatchEvent(new Event(\'change\'));';
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