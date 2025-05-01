"use client";

import { useEffect, useState } from "react";
import CarCard from "../components/car-card"; // Updated to the correct path

interface Car {
  id: string;
  make: string;
  model: string;
  year: string;
  type: string;
  imageUrl: string;
}

export default function CarsPage() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("/api/cars"); // Update your API route
        if (!response.ok) {
          throw new Error("Failed to fetch cars");
        }
        const data = await response.json();
        console.log("Cars data:", data);
        setCars(data.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();

    return () => {
      console.log("CarsPage unmounted");
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl text-black font-bold text-center mb-12">
        Car Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}