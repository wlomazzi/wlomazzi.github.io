document.addEventListener('DOMContentLoaded', () => {
    const sideMenu = document.getElementById('sideMenu');

    document.body.addEventListener('mousemove', (event) => {
        if (event.clientX < 50) {
            sideMenu.style.left = '0';
        } else if (event.clientX > 200) {
            sideMenu.style.left = '-200px';
        }
    });
});
