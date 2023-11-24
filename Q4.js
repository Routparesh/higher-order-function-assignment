const books = [
    { title: 'book1', author: 'author1', year: 2012 },
    { title: 'book2', author: 'author2', year: 2009 },
    { title: 'book4', author: 'author3', year: 2021 },
    { title: 'book5', author: 'author4', year: 2023 },
    { title: 'book6', author: 'author5', year: 2025 },
    { title: 'book7', author: 'author6', year: 2008 },
  ];

const remaingBooks = []  
books.filter((book)=>{
   if(book.year < 2010){
     remaingBooks.push(book.title)
   }else{
          remaingBooks.push(book.author.charAt(0).toUpperCase() + book.author.slice(1))
     }
})

console.log(remaingBooks)