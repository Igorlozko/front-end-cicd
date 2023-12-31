const searchBooks = async () => {
  try {
    const response = await fetch(`http://localhost:8082/api/search/books?keyword=${searchTerm}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('Data from backend:', data);
    setSearchResults(data);

    console.log('Search Results:', searchResults); // Add this line
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
};
