export const revalidate = 1;

export async function GET() {
  return new Response(
    JSON.stringify({
      status: "success",
      code: 200,
      data: [
        {
          id: "1",
          make: "Toyota",
          model: "Corolla",
          year: 2020,
          type: "Sedan",
          imageUrl: "https://www.creativefabrica.com/wp-content/uploads/2023/04/06/futuristic-sports-car-Modern-car-Graphics-66382336-1.jpeg"
        },
        {
          id: "2",
          make: "Honda",
          model: "Civic",
          year: 2021,
          type: "Sedan",
          imageUrl: "https://www.creativefabrica.com/wp-content/uploads/2023/04/06/futuristic-sports-car-Modern-car-Graphics-66382336-1.jpeg"
        },
        {
          id: "3",
          make: "Ford",
          model: "Mustang",
          year: 2019,
          type: "Coupe",
          imageUrl: "https://www.creativefabrica.com/wp-content/uploads/2023/04/06/futuristic-sports-car-Modern-car-Graphics-66382336-1.jpeg"
        },
        {
          id: "4",
          make: "Tesla",
          model: "Model 3",
          year: 2022,
          type: "Electric",
          imageUrl: "https://www.creativefabrica.com/wp-content/uploads/2023/04/06/futuristic-sports-car-Modern-car-Graphics-66382336-1.jpeg"
        },
        {
          id: "5",
          make: "BMW",
          model: "X5",
          year: 2021,
          type: "SUV",
          imageUrl: "https://www.creativefabrica.com/wp-content/uploads/2023/04/06/futuristic-sports-car-Modern-car-Graphics-66382336-1.jpeg"
        },
        {
          id: "6",
          make: "Audi",
          model: "A4",
          year: 2020,
          type: "Sedan",
          imageUrl: "https://www.creativefabrica.com/wp-content/uploads/2023/04/06/futuristic-sports-car-Modern-car-Graphics-66382336-1.jpeg"
        },
        {
          id: "7",
          make: "Chevrolet",
          model: "Camaro",
          year: 2018,
          type: "Sports",
          imageUrl: "https://www.creativefabrica.com/wp-content/uploads/2023/04/06/futuristic-sports-car-Modern-car-Graphics-66382336-1.jpeg"
        },
        {
          id: "8",
          make: "Mercedes-Benz",
          model: "C-Class",
          year: 2022,
          type: "Luxury",
          imageUrl: "https://www.creativefabrica.com/wp-content/uploads/2023/04/06/futuristic-sports-car-Modern-car-Graphics-66382336-1.jpeg"
        }
      ],
    }),
    {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
        "Surrogate-Control": "no-store",
      },
    }
  );
}
