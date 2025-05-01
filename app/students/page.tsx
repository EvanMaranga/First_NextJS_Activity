"use client";

import { useEffect, useState } from "react";
import StudentCard from "../components/student-card";

export default function StudentsPage() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("/api/students");
        if (!response.ok) {
          throw new Error("Failed to fetch students");
        }
        const data = await response.json();
        console.log("Students data:", data);
        console.log(typeof data);
        setStudents(data.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };
    fetchStudents();

    return () => {
      console.log("StudentsPage unmounted");
    };
  }, []);

  return (
    <div>
      <nav>
        <div>
          {students?.map((student) => <StudentCard student={student} />)}
          <a href="/students">Students</a>
        </div>
      </nav>
    </div>
  );
}
