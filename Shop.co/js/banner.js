const closeBtn = document.getElementById('closeBanner');
const banner = document.getElementById('topBanner');

closeBtn.addEventListener('click', () => {
    banner.classList.add('hidden');
});