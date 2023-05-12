const bookModal = document.getElementById('bookModal');
bookModal.children[0].addEventListener('click', e => e.stopPropagation());
const ModalBookCover = document.getElementById('ModalBookCover');
const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookAuthor');
const description = document.getElementById('description');
const shoppingBtn = document.getElementById('shoppingBtn');

const closeBtn = document.querySelector('.closeBtn');
const icon = document.querySelector('#bookModal .shops-icons');

bookModal.shopList = {};

bookModal.set = book => {
  bookModal.shopList[book.id] = book;
};

bookModal.has = id => {
  const keys = Object.keys(bookModal.shopList);
  let is_cnt = false;
  keys.forEach(k => {
    if (k === id) is_cnt = true;
  });

  return is_cnt;
};

bookModal.hangLinks = function (book) {
  icon.children[0].children[0].href = book.buy_links[0].url;
  icon.children[1].children[0].href = book.buy_links[1].url;
  icon.children[2].children[0].href = book.buy_links[2].url;
};