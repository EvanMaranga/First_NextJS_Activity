interface Car {
  id: string;
  make: string;
  model: string;
  year: string;
  type: string;
  imageUrl?: string; // Optional image for car
}

export default function CarCard({ car }: { car: Car }) {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl">
      {car.imageUrl && (
        <img
          src={car.imageUrl}
          alt={`Image of ${car.make} ${car.model}`}
          className="w-full h-64 object-cover rounded-t-xl"
        />
      )}
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800">{`${car.make} ${car.model}`}</h2>
        <p className="text-sm text-gray-500 mb-2">{car.year}</p>
        <div className="text-sm text-gray-700 space-y-1">
          <p><span className="font-medium">Type:</span> {car.type}</p>
          <p><span className="font-medium">Year:</span> {car.year}</p>
        </div>
      </div>
    </div>
  );
}