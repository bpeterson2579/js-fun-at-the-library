function createTitle(bookIdea) {
  return `The ${bookIdea}`;
}

function buildMainCharacter(name, age, pronouns) {
  var newCharacter = {
    name: name,
    age: age,
    pronouns: pronouns,
  }
  return newCharacter;
}

function saveReview(reviewText, reviews) {
  for (var i = 0; i < reviews.length; i++) {
    if (reviews[i] === reviewText) {
      return
    }
  }
  reviews.push(reviewText);
}

function calculatePageCount(createTitle) {
  return createTitle.length * 20;
}

function writeBook(bookTitle, bookCharacter, genre) {
  return book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,
  }
}

function editBook(ghoulBook) {
  ghoulBook.pageCount = ghoulBook.pageCount * .75;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
