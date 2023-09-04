import ArticleCard from "./ArticleCard";
import { useState } from "react";
import { cardData } from "../data/data";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function ArticleCards() {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(cardData.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleCards = cardData.slice(startIndex, endIndex);

  const canGoNext = currentPage < totalPages - 1;
  const canGoPrev = currentPage > 0;

  return (
    <div className="article__cards--container">
      <div className="article__cards">
        {visibleCards.map((card) => (
          <ArticleCard key={card.id} {...card} />
        ))}
      </div>
      <div className="carousel-buttons">
        <button onClick={handlePrevPage} disabled={!canGoPrev}>
          <BsChevronLeft />
        </button>
        <p>{currentPage + 1}/2</p>
        <button onClick={handleNextPage} disabled={!canGoNext}>
          <BsChevronRight />
        </button>
      </div>
    </div>
  );
}
