export const revalidate = 1;

export async function GET() {
  return new Response(
    JSON.stringify({
      status: "success",
      code: 200,
      data: [
        {
          id: "1",
          title: "The Art of Coding",
          author: "Jane Doe",
          genre: "Technology",
          publishedDate: "2021-06-12",
          ISBN: "978-1-23456-789-0",
          imageUrl: "https://covers.openlibrary.org/b/id/10523385-L.jpg"
        },
        {
          id: "2",
          title: "React in Action",
          author: "Mark Tylor",
          genre: "Programming",
          publishedDate: "2022-03-18",
          ISBN: "978-1-98765-432-1",
          imageUrl: "https://covers.openlibrary.org/b/id/8279256-L.jpg"
        },
        {
          id: "3",
          title: "Node.js for Beginners",
          author: "Sam Green",
          genre: "Web Development",
          publishedDate: "2020-11-08",
          ISBN: "978-0-12345-678-9",
          imageUrl: "https://covers.openlibrary.org/b/id/8091016-L.jpg"
        },
        {
          id: "4",
          title: "Mastering Algorithms",
          author: "Linda White",
          genre: "Computer Science",
          publishedDate: "2019-09-25",
          ISBN: "978-9-87654-321-0",
          imageUrl: "https://covers.openlibrary.org/b/id/9289422-L.jpg"
        },
        {
          id: "5",
          title: "Clean Code",
          author: "Robert C. Martin",
          genre: "Software Engineering",
          publishedDate: "2008-08-11",
          ISBN: "978-0-13-235088-4",
          imageUrl: "https://covers.openlibrary.org/b/id/7222246-L.jpg"
        },
        {
          id: "6",
          title: "You Don't Know JS",
          author: "Kyle Simpson",
          genre: "JavaScript",
          publishedDate: "2015-03-27",
          ISBN: "978-1-4919-5636-7",
          imageUrl: "https://covers.openlibrary.org/b/id/10243691-L.jpg"
        },
        {
          id: "7",
          title: "Design Patterns",
          author: "Erich Gamma",
          genre: "Software Architecture",
          publishedDate: "1994-10-21",
          ISBN: "978-0-201-63361-0",
          imageUrl: "https://covers.openlibrary.org/b/id/13417629-L.jpg"
        },
        {
          id: "8",
          title: "Introduction to Algorithms",
          author: "Thomas H. Cormen",
          genre: "Computer Science",
          publishedDate: "2009-07-31",
          ISBN: "978-0-262-03384-8",
          imageUrl: "https://covers.openlibrary.org/b/id/12683778-L.jpg"
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
    },
  );
}
