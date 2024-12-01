document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('open-btn');
    const closeBtn = document.getElementById('close-btn');

    openBtn.addEventListener('click', function() {
        sidebar.classList.remove('closed');
        openBtn.style.display = 'none';
    });

    closeBtn.addEventListener('click', function() {
        sidebar.classList.add('closed');
        openBtn.style.display = 'flex';
    });
});