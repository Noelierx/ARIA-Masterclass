document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', toggleAccordion);
    });

    function toggleAccordion() {
        const content = this.nextElementSibling;
        const isExpanded = this.getAttribute('aria-expanded') === 'true';

        this.setAttribute('aria-expanded', !isExpanded);
        content.hidden = isExpanded;
    }

    // Pour la version native, aucun JavaScript n'est nécessaire
});
