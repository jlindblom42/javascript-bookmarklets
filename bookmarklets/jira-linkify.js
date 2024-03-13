javascript:(function () {
    const href = window.location.href;
    const title = document.querySelector('[data-testid="issue.views.issue-base.foundation.summary.heading"]')?.textContent;
    const link = title ? title + '\n' + href : href;
    console.log(link);
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(link).then(function () {
            console.log('Jira link copied to clipboard.');
            alert('Jira link created and copied to clipboard.\n\n' + link);
        }).catch(function (error) {
            console.error('Error copying text: ', error);
            alert('Jira link created but failed to copy to clipboard, see dev console instead.\n\n' + link);
        });
    } else {
        alert('Jira link created, see dev console.\n\n' + link);
    }
})();