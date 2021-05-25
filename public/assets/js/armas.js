const list = document.querySelectorAll('.group'); // Selecionar todos com a classe .group

list.forEach((el) => { // forEach = 'for' que vai percorrer todos os elementos da constante list
  const [title, content] = el.children; // Desestruturando o objeto el.children
  title.addEventListener('click', () => { // Vai escutar o 'click' no title do elemento com a classe .group
    // const hasNoHeight = content.classList.contains('hide'); // Vai verificar se possui a classe .hide
    // hasNoHeight
      // ? content.classList.remove('hide') // Caso tenha .hide irá remover a classe
      // : content.classList.add('hide'); // Caso não tenha, irá adicionar
      if(content.classList.contains('hide')) {
        content.classList.remove('hide') // Caso tenha .hide irá remover a classe
        title.classList.add('title-selected')
      } else {
        content.classList.add('hide') // Caso tenha .hide irá remover a classe
        title.classList.remove('title-selected')
      }
  });
});
