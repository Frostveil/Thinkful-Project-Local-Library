function findAuthorById(authors, id) {
  
  return authors.find((author) => author.id === id)
  
}

function findBookById(books, id) {
  
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  
  const borrowed = []
  
  const returned = []
  
  const statusArray = [borrowed, returned]
  
  
  books.forEach((book) => {
    
    if(book.borrows[0].returned === false){
      borrowed.push(book)
    }else{
      returned.push(book)
    }
  })
  
  return statusArray
}

function getBorrowersForBook(book, accounts) {
  
  const transactions = book.borrows;

  const result = transactions.map((transaction) => {
    const accountInfo = accounts.find((account) => account.id === transaction.id);
    const newTransaction = {
      ...transaction,
      ...accountInfo,
    };
    return newTransaction;
  });
  
  result.splice(10);

  return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
