function findAccountById(accounts, id) {
  
  return accounts.find((account) => account.id === id)
  
}

//============================================================================================================================
function sortAccountsByLastName(accounts) {
  
  return accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1)
  
}

//============================================================================================================================
function getTotalNumberOfBorrows(account, books) {
  
  let total = books.reduce((acc, book) => {
    
    const borrowCount = book.borrows.filter((borrow) => borrow.id === account.id).length
    
    return acc + borrowCount
  }, 0)

  
  
  return total
}

//============================================================================================================================
function getBooksPossessedByAccount(account, books, authors) {
  
  const returnStatus = books.filter((book) => {
    
    return book.borrows[0].returned === false && book.borrows[0].id === account.id
  })

  return returnStatus.map((book) => {
    
    const author = authors.find((author) => author.id === book.authorId)
    
    const possessedObject = {...book, author}
    
    return possessedObject
  })
}

//============================================================================================================================
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
