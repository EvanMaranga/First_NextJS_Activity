export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch("http://localhost:3000/api/cars", {
    cache: "no-store",
  });
  const data = await res.json();
  const car = data.data.find((c: any) => c.id === id);

  if (!car) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-50">
        <div className="bg-white rounded-xl shadow p-6 text-center border border-red-300">
          <h2 className="text-2xl font-semibold text-red-600">Car Not Found</h2>
          <p className="text-gray-600">No car with ID: {id}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full text-center border border-gray-300">
        {car.imageUrl && (
          <img
            src={car.imageUrl}
            alt={car.make + " " + car.model}
            className="w-full h-64 object-cover rounded-md mb-4"
          />
        )}
        <h1 className="text-2xl font-bold text-gray-800 mb-1">{car.make} {car.model}</h1>
        <p className="text-sm text-gray-600 italic mb-2">{car.year} {car.type}</p>

        <div className="text-left text-sm text-gray-700 space-y-1">
          <p><span className="font-medium">Car ID:</span> {car.id}</p>
          <p><span className="font-medium">Make:</span> {car.make}</p>
          <p><span className="font-medium">Model:</span> {car.model}</p>
          <p><span className="font-medium">Year:</span> {car.year}</p>
          <p><span className="font-medium">Type:</span> {car.type}</p>
        </div>
      </div>
    </div>
  );
}