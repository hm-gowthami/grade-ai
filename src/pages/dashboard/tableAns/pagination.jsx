import React, { useState } from 'react';

const PaginationComponent = ({ data }) => {
  // State to keep track of the current page
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(1); // Set to 1 since you want one card per page

  // Calculate the index of the last and first card on the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  // Slice the data to only include the cards for the current page
  const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);

  // Change page handler
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {currentCards.map((card, index) => (
        <div key={index}>
          {/* Render your card here */}
          <h2>{card.qnT}</h2>
          <p>{card.ans}</p>
          {/* ...other card details */}
        </div>
      ))}
      <div>
        {data.map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

// Sample data
const data = [
  // ... your card data here
];

export default function App() {
  return (
    <div className="App">
      <PaginationComponent data={data} />
    </div>
  );
}
