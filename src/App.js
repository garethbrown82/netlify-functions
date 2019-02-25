import React, { Component } from 'react'

// We'll use a function to return books from where ever we get them from.
// In this case it is from the hard coded 'booksData' object above but will eventually
// come from a Netlify function
const getBooksData = () => {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:9000/.netlify/functions/getbooks')
      .then((result) => result.json())
      .then((json) => resolve(json))
      .catch((error) => reject(error))
  })
}

class App extends Component {
  state = {
    books: []
  }

  componentDidMount = () => {
    this.getBooks()
  }
  
  getBooks = async () => {
    try {
      const books = await getBooksData()
      this.setState({ books })
    } catch (error) {
      console.error('There was an error while retrieving book data: ', error)
    }
  }
  
  render() {
    const { books } = this.state

    return (
      <div style={{ 
        maxWidth: '500px',
        margin: 'auto',
      }}>
        {books && books.map((book) => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p><i>{book.user}</i></p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
