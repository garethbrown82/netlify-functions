// https://gareth-functions-demo.netlify.com/.netlify/functions/getbooks

exports.handler = (event, context, callback) => {
  const createBook = (id, title, author, userName) => {
    return {
      id,
      title,
      author,
      user: userName,
    }
  }
  
  const booksData = [
    createBook('1', 'Moby Dick', 'Herman Melville', 'luvbooks'),
    createBook('2', 'Harry Potter and the Philosopher\'s Stone', 'J.K. Rowling', 'magicman'),
    createBook('3', 'Three Men in a Boat', 'Jerome K. Jerome', 'luvbooks'),
    createBook('4', 'Magician', ' Raymond E. Feist', 'magicman'),
    createBook('5', 'To Kill a Mockingbird', 'Harper Lee', 'atticus60'),
    createBook('6', 'Mindstate', 'Desmond Hampel', 'atticus60'),
  ]

  callback(null, {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(booksData)
  });
}