import React, { useState } from 'react';
import axios from 'axios';

const SearchComponent = () => {
    // State variables
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    // Function to handle search
    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8080/api/products/search?q=${searchQuery}`);
            setSearchResults(response.data); // Update search results state with fetched data
        } catch (error) {
            console.error('Search failed:', error);
        }
    };

    return (
        <div>
            <h2>Search Products</h2>
            <form onSubmit={handleSearch}>
                <input type="text" placeholder="Search by name, category, etc." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit">Search</button>
            </form>
            <div>
                <h3>Search Results</h3>
                <ul>
                    {searchResults.map((product) => (
                        <li key={product.id}>{product.name} - {product.category}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SearchComponent;
