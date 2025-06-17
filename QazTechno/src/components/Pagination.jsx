

const getPages = (current, total) => {
    
  const pages = [];

  if (total <= 5) {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    if (current <= 3) {
      pages.push(1, 2, 3, '...', total);
    } else if (current >= total - 2) {
      pages.push(1, '...', total - 2, total - 1, total);
    } else {
      pages.push(1, '...', current - 1, current, current + 1, '...', total);
    }
  }

  return pages;
};


 
function Pagination({ page, pageHandler, dynamicPage }) {

return (
    <div className="mt-10 flex flex-wrap justify-center items-center gap-2 p-4 rounded-lg">
      <button
        disabled={page === 1}
        onClick={() => pageHandler(page - 1)}
        className={`${
          page === 1 ? "bg-red-400" : "bg-red-500"
        } text-white px-3 py-1 rounded-md cursor-pointer hover:bg-red-600 transition-all text-sm`}
      >
        Prev
      </button>

      {getPages(page, dynamicPage).map((item, index) => (
        <span
          key={index}
          onClick={() => typeof item === "number" && pageHandler(item)}
          className={`cursor-pointer ${
            item === page ? "font-bold text-red-700" : "font-bold text-gray-700"
          } px-3 py-1 rounded-md hover:text-red-600 transition-all text-sm`}
        >
          {item}
        </span>
      ))}

      <button
        disabled={page === dynamicPage}
        onClick={() => pageHandler(page + 1)}
        className={`${
          page === dynamicPage ? "bg-red-400" : "bg-red-500"
        } text-white px-3 py-1 rounded-md cursor-pointer hover:bg-red-600 transition-all text-sm`}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
