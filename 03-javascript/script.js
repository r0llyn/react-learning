const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
//DESTRUCTURING

//const book = getBook(3);

//const { title, author, pages, publicationDate, genres} = book;

//const [...g] = genres;
//const newGenres = [...genres, "Fantasy"];

//const updatedBook = {...book,you:"me",pages:1200}

//const summary = `${title} a book`;

//const getYear = (str) => str.split('-')[0];

////console.log(getYear(publicationDate));
////console.log('' && 'some string')
////console.log('' || 'some string')
////console.log('' ?? 'no data')
////console.log(null ?? 'some data')

//book

//function getTotalReviews(book) {
//    const g = book.reviews.goodreads.reviewsCount;
//    const f = book.reviews.librarything?.reviewsCount ?? 0;
//    return g + f;
//}

//const r = getTotalReviews(book);
//r
const books = getBooks();
//books


const f = books.filter(c => c.id === 1)

const k = books.map(m => {
  return {
    title: m.title,
    pages: m.pages
  }
})

const allPages = books.reduce((acc,book)=>acc+book.pages,0);

//allPages

const nums = [1,5,3,2,6, 7, 9, 8];
const sorted = nums.slice().sort((a,b)=>a-b)

//const sortedBooks = nums.slice().sort((a,b) => a-b );
//sortedBooks
//sorted
//nums




//fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json()).
//then(data => {
//  console.log(data);
//})
console.log('rocks')

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await res.json();
}

const datas = await getTodos();
datas