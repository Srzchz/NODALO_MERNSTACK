import teacher from "../components/teacher.json";


export default function Teacher() {

    return (
        <div className="bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center py-8">Teacher List</h1>
            <div className="flex flex-wrap justify-center">
                {teacher.map((teacher) => (
                    <div key={teacher.id} className="bg-gray-300 shadow-md rounded-lg p-4 m-4 max-w-sm mx-auto">
                        <h2 className="text-xl font-semibold">{teacher.name}</h2>
                        <p className="text-gray-600">Employee ID: {teacher.employeeId}</p>
                        <p className="text-gray-600">Department: {teacher.department}</p>
                        <a href={`/teacher/${teacher.id}`} className="text-blue-500 hover:underline mt-2 block">View Details</a>
                    </div>
                ))}
            </div>
        </div>
    );
}