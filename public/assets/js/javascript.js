// Todas imagens dentro do classe image-modal-content
const lightboxImages = document.querySelectorAll('.image-modal-content');

// Seleciona dinamicamente todos os elementos dentro do modal
const modalElement = (element) =>
  document.querySelector(`.image-modal-popup ${element}`);

const body = document.querySelector('body');

// Fechar o modal
document.addEventListener('click', () => {
  body.style.overflow = 'auto';
  modalPopup.style.display = 'none';
});

const modalPopup = document.querySelector('.image-modal-popup');

// Loop em cada imagem e adicionando o evento de click
lightboxImages.forEach((img) => {
  img.addEventListener('click', (e) => {
    body.style.overflow = 'hidden';
    e.stopPropagation();
    modalPopup.style.display = 'block';
    modalElement('img').src = img.children['img-overview'].src;
  });
});