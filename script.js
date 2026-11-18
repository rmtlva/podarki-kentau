
function setLanguage(lang) {
    localStorage.setItem('siteLanguage', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-kk]').forEach(element => {
        element.textContent = element.getAttribute('data-' + lang);
    });

    document.querySelectorAll('[data-kk-placeholder]').forEach(element => {
        element.placeholder = element.getAttribute('data-' + lang);
    });

    document.querySelectorAll('.languages button').forEach(button => {
        button.classList.toggle(
            'selected',
            button.dataset.lang === lang
        );
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const savedLanguage = localStorage.getItem('siteLanguage') || 'kk';
    setLanguage(savedLanguage);
});
