import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const galleryPictures = galleryPicturesMark();
gallery.insertAdjacentHTML("beforeend", galleryPictures);
gallery.addEventListener('click', onGallaryPicClick);
function galleryPicturesMark(){
    return galleryItems.map(({preview, original, description}) => {
        return `<div class="gallery__item">
         <a class="gallery__link" href="${original}">
             <img class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"/>
         </a>
         </div>`})
    .join('');
} 
function onGallaryPicClick(evt) {
    evt.preventDefault();
       if (evt.target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create( `<img src="${evt.target.dataset.source}">`, {
        onShow: instance => {
            document.addEventListener('keydown', onEscapeKeyDown);
        },
        onClose: instance => {
            document.removeEventListener('keydown', onEscapeKeyDown);
        },
    }); 
    instance.show();
    function onEscapeKeyDown(evt) {
        if (evt.code !== 'Escape') {
            return;
        }
        instance.close();
    }
}
console.log(galleryItems);
