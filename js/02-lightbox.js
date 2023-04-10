import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const   creatMark = creatMarkUp();
function creatMarkUp() {
    const markup = galleryItems.reduce((pictures, { preview, original, description }) => {
        return pictures += `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`;
}, "");
    gallery.insertAdjacentHTML('beforeend', markup);
}
const lightBoxGallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    close: true,
});

console.log(galleryItems);