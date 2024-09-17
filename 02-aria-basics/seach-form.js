document.addEventListener('DOMContentLoaded', () => {
    initAccessibleSearch();
    initInaccessibleSearch();
});

function initAccessibleSearch() {
    const form = document.getElementById('accessibleSearchForm');
    const input = document.getElementById('accessibleSearchInput');
    const button = document.getElementById('accessibleSearchButton');

    input.addEventListener('input', () => {
        const isEmpty = input.value.trim() === '';
        button.disabled = isEmpty;
        button.setAttribute('aria-disabled', isEmpty.toString());
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!button.disabled) {
            performSearch(input.value, 'accessible');
        }
    });
}

function initInaccessibleSearch() {
    const form = document.getElementById('inaccessibleSearchForm');
    const input = document.getElementById('inaccessibleSearchInput');
    const button = document.getElementById('inaccessibleSearchButton');

    button.addEventListener('click', () => {
        performSearch(input.value, 'inaccessible');
    });
}

function performSearch(query, type) {
    const resultsDiv = document.getElementById('searchResults');
    resultsDiv.textContent = `Recherche ${type} effectuée pour : "${query}"`;
}
