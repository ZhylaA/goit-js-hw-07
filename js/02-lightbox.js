// библиотека SimpleLightbox
// Сделай такую же галерею как в первом задании, но используя библиотеку SimpleLightbox,
//     которая возьмет на себя обработку кликов по изображениям, открытие 
// и закрытие модального окна,
//         а также пролистывание изображений при помощи клавиатуры.

// Посмотри демо видео работы галереи с подключенной библиотекой.
// Необходимо немного изменить разметку карточки галереи, используй этот шаблон.

// <a class="gallery__item" href="large-image.jpg">
//   <img class="gallery__image" src="small-image.jpg" alt="Image description" />
// </a>

// 5.Инициализация библиотеки после того как элементы галереи созданы
//  и добавлены в div.gallery.
//  6. Для этого ознакомься с документацией SimpleLightbox - в первую очередь
// секции «Usage» и «Markup».
// 7.Посмотри в документации секцию «Options» и 
// добавь отображение подписей к изображениям из атрибута alt. 
// 8.Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
//1. Создание и рендер разметки по массиву данных galleryItems 
// и предоставленному шаблону элемента галереи. 
const gallaryBox = document.querySelector('.gallery');
const galleryItemMarkup = createListItemMarkup(galleryItems);
gallaryBox.innerHTML = galleryItemMarkup;

//2.Используй готовый код из первого задания.
function createListItemMarkup(items) {
    return items.map(item => `
    <a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" 
    alt="${item.description}" /></a>`).join('');
};

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData:'alt',
    // captionPosition:'bottom',
    captionDelay: 250,

});
console.log(lightbox)

