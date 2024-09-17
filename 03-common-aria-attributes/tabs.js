document.addEventListener('DOMContentLoaded', () => {
    // Native tabs
    const nativeTabs = document.querySelectorAll('.native-tabs > a');
    const nativePanels = document.querySelectorAll('.native-tabs > div');

    nativeTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            nativeTabs.forEach(t => t.classList.remove('active'));
            nativePanels.forEach(p => p.hidden = true);
            tab.classList.add('active');
            document.querySelector(tab.getAttribute('href')).hidden = false;
        });
    });

    // Custom tabs
    const customTabs = document.querySelectorAll('[role="tab"]');
    const customTabList = document.querySelector('[role="tablist"]');

    customTabs.forEach(tab => {
        tab.addEventListener('click', changeCustomTabs);
    });

    customTabList.addEventListener('keydown', changeCustomTabFocus);

    let tabFocus = 0;

    function changeCustomTabs(e) {
        const target = e.target;
        const parent = target.parentNode;
        const grandparent = parent.parentNode;

        parent
            .querySelectorAll('[aria-selected="true"]')
            .forEach(t => t.setAttribute('aria-selected', false));

        target.setAttribute('aria-selected', true);

        grandparent
            .querySelectorAll('[role="tabpanel"]')
            .forEach(p => p.setAttribute('hidden', true));

        grandparent.parentNode
            .querySelector(`#${target.getAttribute('aria-controls')}`)
            .removeAttribute('hidden');
    }

    function changeCustomTabFocus(e) {
        const keydownLeft = 37;
        const keydownRight = 39;

        if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
            customTabs[tabFocus].setAttribute('tabindex', -1);
            if (e.keyCode === keydownRight) {
                tabFocus++;
                if (tabFocus >= customTabs.length) {
                    tabFocus = 0;
                }
            } else if (e.keyCode === keydownLeft) {
                tabFocus--;
                if (tabFocus < 0) {
                    tabFocus = customTabs.length - 1;
                }
            }

            customTabs[tabFocus].setAttribute('tabindex', 0);
            customTabs[tabFocus].focus();
        }
    }
});
