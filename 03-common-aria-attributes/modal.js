document.addEventListener('DOMContentLoaded', () => {
    // Native modal
    const openNativeModalBtn = document.getElementById('openNativeModalBtn');
    const closeNativeModalBtn = document.getElementById('closeNativeModalBtn');
    const nativeModal = document.getElementById('nativeModal');

    openNativeModalBtn.addEventListener('click', () => nativeModal.showModal());
    closeNativeModalBtn.addEventListener('click', () => nativeModal.close());

    // Custom modal
    const openCustomModalBtn = document.getElementById('openCustomModalBtn');
    const closeCustomModalBtn = document.getElementById('closeCustomModalBtn');
    const customModal = document.getElementById('customModal');
    const modalOverlay = document.getElementById('modalOverlay');

    function openCustomModal() {
        customModal.classList.add('active');
        modalOverlay.classList.add('active');
        customModal.setAttribute('aria-hidden', 'false');
        openCustomModalBtn.setAttribute('aria-expanded', 'true');
        closeCustomModalBtn.focus();
    }

    function closeCustomModal() {
        customModal.classList.remove('active');
        modalOverlay.classList.remove('active');
        customModal.setAttribute('aria-hidden', 'true');
        openCustomModalBtn.setAttribute('aria-expanded', 'false');
        openCustomModalBtn.focus();
    }

    openCustomModalBtn.addEventListener('click', openCustomModal);
    closeCustomModalBtn.addEventListener('click', closeCustomModal);
    modalOverlay.addEventListener('click', closeCustomModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && customModal.classList.contains('active')) {
            closeCustomModal();
        }
    });
});
