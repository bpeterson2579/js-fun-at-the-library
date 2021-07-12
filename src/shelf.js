function shelfBook(bookTitle, sciFiShelf) {
  if (bookTitle.genre === "sciFi" && sciFiShelf.length < 3) {
    sciFiShelf.unshift(bookTitle);
  }else {
    return
  }
}

function unshelfBook(bookTitle, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    var takeBook = shelf[i].title.includes(bookTitle);
    if (takeBook === true) {
      return shelf.splice(i, 1);
    }
  }
}

function listTitles(fantasyShelf) {
  return fantasyShelf.title;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  // searchShelf
};
