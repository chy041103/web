const photos = document.querySelectorAll('.photo img');
const modal = document.createElement('div');
const modalImage = document.createElement('img');

modal.style.display = 'none';
modal.style.position = 'fixed';
modal.style.top = '0';
modal.style.left = '0';
modal.style.width = '100vw';
modal.style.height = '100vh';
modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
modal.style.display = 'flex';
modal.style.alignItems = 'center';
modal.style.justifyContent = 'center';

modalImage.style.maxWidth = '80%';
modalImage.style.maxHeight = '80%';

modal.appendChild(modalImage);
document.body.appendChild(modal);

photos.forEach(photo => {
    photo.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImage.src = photo.src;
    });
});

modal.addEventListener('click', () => {
    modal.style.display = 'none';
});
