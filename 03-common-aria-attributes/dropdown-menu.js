document.addEventListener('DOMContentLoaded', () => {
    // Native dropdown
    const nativeButton = document.getElementById('nativeDropdownButton');
    const nativeMenu = document.getElementById('nativeDropdownMenu');

    nativeButton.addEventListener('click', () => {
        nativeMenu.hidden = !nativeMenu.hidden;
    });

    // Custom dropdown
    const customButton = document.getElementById('customDropdownButton');
    const customMenu = document.getElementById('customDropdownMenu');
    const customItems = customMenu.querySelectorAll('[role="menuitem"]');

    function toggleCustomDropdown() {
        const expanded = customButton.getAttribute('aria-expanded') === 'true';
        customButton.setAttribute('aria-expanded', !expanded);
        customMenu.hidden = expanded;

        if (!expanded) {
            customItems[0].focus();
        }
    }

    customButton.addEventListener('click', toggleCustomDropdown);

    customItems.forEach(item => {
        item.addEventListener('click', () => {
            console.log('Selected:', item.textContent);
            toggleCustomDropdown();
        });
    });

    customMenu.addEventListener('keydown', (e) => {
        const currentIndex = Array.from(customItems).indexOf(document.activeElement);
        let nextIndex;

        switch(e.key) {
            case 'ArrowDown':
                nextIndex = (currentIndex + 1) % customItems.length;
                break;
            case 'ArrowUp':
                nextIndex = (currentIndex - 1 + customItems.length) % customItems.length;
                break;
            case 'Escape':
                toggleCustomDropdown();
                customButton.focus();
                return;
            default:
                return;
        }

        customItems[nextIndex].focus();
        e.preventDefault();
    });
});