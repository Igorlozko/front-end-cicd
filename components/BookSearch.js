// components/BookSearch.js

import React, { useState, useEffect } from 'react';
import styles from './BookSearch.module.css';
import { useRouter } from 'next/router';

const BookSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const searchBooks = async () => {
      try {
        const response = await fetch(`http://localhost:8082/api/search/books?keyword=${searchTerm}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setSearchResults(data);
        setShowSuggestions(true);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    searchBooks();
  }, [searchTerm]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:8082/api/search/books?keyword=${searchTerm}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
  
      // If there is only one result and it has a valid id, navigate directly to that book page
      if (data.length === 1 && data[0]._id) {
        router.push(`/books/${data[0]._id}`);
      } else {
        // Otherwise, perform the search as usual
        onSearch(searchTerm);
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const handleSuggestionClick = (book) => {
    if (book._id) {
      // Handle navigation to the book page using the bookId
      router.push(`/books/${book._id}`);
      setShowSuggestions(false);
    } else {
      console.error('Invalid book id:', book._id);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Enter keyword..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {showSuggestions && (
        <div className={styles.suggestionsContainer}>
          <ul>
            {searchResults.map((book, index) => (
              <li key={index} onClick={() => handleSuggestionClick(book)}>
                {book.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BookSearch;
