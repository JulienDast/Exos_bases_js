const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

{//Début sous-bloc question 1
 const checkRented = books.every(
  function (book){
  return book.rented >=1;
 });
 console.log("Si c'est marqué true, c'est que c'est true, sinon...")
 console.log(checkRented)
}//Fin sous-bloc 1

{//Début sous-bloc question 2
  console.log(
    books.reduce((acc, x) => {
      acc.rented = Math.max(acc.rented, x.rented)
      return acc
    }, {rented: -Infinity })
  )
}//Fin sous-bloc 2

{//Début sous-bloc question 3
  console.log(
    books.reduce((acc, x) => {
      acc.rented = Math.min(acc.rented, x.rented)
      return acc
    }, {rented: Infinity })
  )   
}//Fin sous-bloc 3

{//Début sous-bloc question 4
  function bookid(book) {
    return book.id === 873495;
  }
console.log(books.find(bookid));
}//Fin sous-bloc 4

{//Début sous-bloc question 5
  function removeObjectWithId(books, id) {
    const objWithIdIndex = books.findIndex((obj) => obj.id === id);
      books.splice(objWithIdIndex, 1);
    return books;
  }
  removeObjectWithId(books, 133712);
  console.log("Voici la liste des livres après suppression du n°133712");
  console.log(books);

}//Fin sous-bloc 5

{//Début sous-bloc question 6
  let books_titles = books.map((books) => books.title);
  books_titles.sort();
  console.log("Voici la nouvelle liste des livres rangés par ordre alphabétique :")
  console.log(books_titles);
}//Fin sous-bloc question 6