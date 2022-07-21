import React from 'react';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';

const Pagination = ({pagesArray, setPage, current}) => {
  const nextPage = () => {
    if (current < pagesArray.length) {
      setPage(current + 1);
    }
  };
  const previousPage = () => {
    if (current > 1) {
      setPage(current - 1);
    }
  };

  return (
    <div className="flex justify-center">
      <button
        // disabled={current === 1 ? true : false}
        onClick={previousPage}
        className={`hover:bg-zinc-400 rounded-3xl w-8 h-8 flex items-center justify-center border-2 border-gray-800 mr-3
				${current === 1 ? 'opacity-30 pointer-events-none' : ''}`}>
        <AiOutlineArrowLeft />
      </button>
      {pagesArray.map(page => (
        <button
          onClick={() => setPage(page)}
          key={page}
          className={`hover:bg-zinc-400 rounded-3xl w-8 h-8 flex items-center justify-center border-2 border-gray-800 mr-3 ${
            current === page ? 'bg-gray-700 text-bold scale-125' : ''
          }`}>
          {page}
        </button>
      ))}
      <button
        onClick={nextPage}
        className={`hover:bg-zinc-400 rounded-3xl w-8 h-8 flex items-center justify-center border-2 border-gray-800 mr-3
				${current === pagesArray.length ? 'opacity-30 pointer-events-none' : ''}`}>
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
