interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  publishedDate: string;
  ISBN: string;
  imageUrl?: string; // Add imageUrl to the interface
}

export default function BookCard({ book }: { book: Book }) {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl">
      {book.imageUrl && (
        <img
          src={book.imageUrl}
          alt={`Cover of ${book.title}`}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">{book.title}</h2>
        <p className="text-sm text-gray-500 mb-2">by {book.author}</p>
        <div className="text-sm text-gray-700 space-y-1">
          <p><span className="font-medium">Genre:</span> {book.genre}</p>
          <p><span className="font-medium">Published:</span> {book.publishedDate}</p>
          <p><span className="font-medium">ISBN:</span> {book.ISBN}</p>
        </div>
      </div>
    </div>
  );
}