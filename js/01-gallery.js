// // 3. Подключение скрипта и стилей библиотеки модального окна basicLightbox. 
// // Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные(.min) файлы библиотеки.

// // 5. Открытие модального окна по клику на элементе галереи. 
// // Для этого ознакомься с документацией и примерами.

// // 6. Замена значения атрибута src элемента < img > в модальном окне перед открытием.
// // Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

// // 7. Разметка элемента галереи
// // Ссылка на оригинальное изображение должна храниться в data - атрибуте source на элементе < img >, 
// // и указываться в href ссылки. 

import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);
const gallaryBox = document.querySelector('.gallery');
// 1. Создание и рендер разметки по массиву данных galleryItems 
// и предоставленному шаблону элемента галереи. 
const galleryItemMarkup = createListItemMarkup(galleryItems);
gallaryBox.innerHTML = galleryItemMarkup;
function createListItemMarkup(items) {
    return items.map(item => `<div class="gallery__item">
<a class="gallery__link" href="${item.original}">
<img class="gallery__image"
src="${item.preview}"
data-source="${item.original}"
alt="${item.description}"/>
</a>
</div>`).join('');
};
gallaryBox.addEventListener('click', onClick)
function onClick(event) {
    // 8.   Обрати внимание на то, что изображение обернуто в ссылку, а значит при клике по умолчанию 
    // пользователь будет перенаправлен на другую страницу. Запрети это поведение по умолчанию.
    event.preventDefault();
    // 2. Реализация делегирования на div.gallery и получение url большого изображения.
    const imageGalary = event.target.classList.contains('gallery__image');
    const instance = basicLightbox.create(`<img  width="800" height="600" src="${event.target.dataset.source}">`);
    instance.show();
    // // 9. Закрытие с клавиатуры
// // ⚠️ Следующий функционал не обязателен при сдаче задания, но будет хорошей дополнительной практикой.
// // Добавь закрытие модального окна по нажатию клавиши Escape.Сделай так, чтобы прослушивание клавиатуры было только пока открыто модальное окно.
// //  У библиотеки basicLightbox есть метод для программного закрытия модального окна.
    if (imageGalary == true) { document.addEventListener('keydown', (event) => { if (event.key === 'Escape') { instance.close(); } }); } return;
    };


