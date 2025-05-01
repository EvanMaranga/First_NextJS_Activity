export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch("http://localhost:3000/api/books", {
    cache: "no-store",
  });
  const data = await res.json();
  const book = data.data.find((b: any) => b.id === id);

  if (!book) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-50">
        <div className="bg-white rounded-xl shadow p-6 text-center border border-red-300">
          <h2 className="text-2xl font-semibold text-red-600">Book Not Found</h2>
          <p className="text-gray-600">No book with ID: {id}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full text-center border border-gray-300">
        {book.imageUrl && (
          <img
            src={book.imageUrl}
            alt={book.title}
            className="w-full h-64 object-cover rounded-md mb-4"
          />
        )}
        <h1 className="text-2xl font-bold text-gray-800 mb-1">{book.title}</h1>
        <p className="text-sm text-gray-600 italic mb-2">by {book.author}</p>

        <div className="text-left text-sm text-gray-700 space-y-1">
          <p><span className="font-medium">Genre:</span> {book.genre}</p>
          <p><span className="font-medium">Published:</span> {book.publishedDate}</p>
          <p><span className="font-medium">ISBN:</span> {book.ISBN}</p>
          <p><span className="font-medium">Book ID:</span> {book.id}</p>
        </div>
      </div>
    </div>
  );
}