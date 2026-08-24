function studentCard({ name, age, studentNumber, course }) {
    return (
        <div className="bg-red-100 shadow-md rounded-lg p-4 m-4 max-w-sm mx-auto">
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <p className="text-gray-600 mb-1">Age: {age}</p>
            <p className="text-gray-600 mb-1">Student Number: {studentNumber}</p>
            <p className="text-gray-600">Course: {course}</p> 
        </div>
    );
}

export default studentCard;
