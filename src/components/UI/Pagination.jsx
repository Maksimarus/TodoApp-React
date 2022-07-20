import React from 'react';

const Pagination = ({pagesArray, setPage, current}) => {
  return (
    <div className="flex justify-center">
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
    </div>
  );
};

export default Pagination;
