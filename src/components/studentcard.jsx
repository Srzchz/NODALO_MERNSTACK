import { Link, Route } from "react-router-dom";

function studentCard({ id, name, age }) {
    return (
        <div className="bg-red-100 shadow-md rounded-lg p-4 m-4 max-w-sm mx-auto">
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <p className="text-gray-600 mb-1">Age: {age}</p>
            <Link to={`/student/${id}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                View Student Details
            </Link>
            
        </div>
    );
}

export default studentCard;
