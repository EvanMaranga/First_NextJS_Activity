export default function StudentCard({ student }: { student: Student }) {
  return (
    <div className="card p-4 m-4 bg-gray-400 rounded-md text-black w-[450px] mx-auto">
      <div className="card-header">
        <h2 className="card-title">{student.name}</h2>
      </div>
      <div className="card-body">
        <p className="card-text">{student.email}</p>
      </div>
    </div>
  );
}
