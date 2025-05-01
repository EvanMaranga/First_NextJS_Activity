// export const dynamic = "force-dynamic";
export const revalidate = 1;

export async function GET() {
  return new Response(
    JSON.stringify({
      status: "success",
      code: 200,
      data: [
        {
          id: "6823",
          name: "Dominador Junior",
          grade: "A",
          age: 19,
          major: "Computer Science",
          enrollmentDate: "2023-01-15",
        },
        {
          id: "101",
          name: "Alice Johnson",
          grade: "A",
          age: 19,
          major: "Computer Science",
          enrollmentDate: "2023-01-15",
        },
        {
          id: "102",
          name: "Bob Smith",
          grade: "B+",
          age: 20,
          major: "Mathematics",
          enrollmentDate: "2022-09-10",
        },
        {
          id: "103",
          name: "Charlie Williams",
          grade: "A-",
          age: 18,
          major: "Engineering",
          enrollmentDate: "2023-02-22",
        },
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
    },
  );
}
