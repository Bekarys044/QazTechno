const getCategoryIcon = (category) => {
  switch (category.toLowerCase()) {
    case 'game':
      return (
        <svg className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case 'mobile':
      return (
        <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <rect width="12" height="20" x="6" y="2" rx="2" ry="2" strokeWidth={2} />
          <circle cx="12" cy="18" r="1" />
        </svg>
      );
    case 'audio':
      return (
        <svg className="h-5 w-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeWidth={2} d="M9 19V6l12-2v13" />
        </svg>
      );
    case 'tv':
      return (
        <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <rect width="20" height="14" x="2" y="5" rx="2" ry="2" strokeWidth={2} />
          <path strokeWidth={2} d="M8 21h8" />
        </svg>
      );
    case 'laptop':
      return (
        <svg className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <rect width="18" height="12" x="3" y="4" rx="2" ry="2" strokeWidth={2} />
          <path strokeWidth={2} d="M2 20h20" />
        </svg>
      );
    default:
      return (
        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth={2} />
        </svg>
      );
  }
};

export default getCategoryIcon