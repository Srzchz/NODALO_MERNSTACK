import React from "react";
import { useParams } from "react-router-dom";
import teachers from "../data/teachers.json";

export default function TeacherDetails() {
    const { id } = useParams();

    const teacher = teachers.find(
        (teacher) => teacher.id == parseInt(id)
    );
    return (
        <div className="bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center py-8">Teacher Details</h1>
            <div className="flex flex-wrap justify-center">
                <div className="bg-red-100 shadow-md rounded-lg p-4 m-4 max-w-sm mx-auto">
                    <h2 className="text-xl font-semibold">{teacher.name}</h2>
                            <p className="text-gray-600">Employee ID: {teacher.employeeId}</p>
                            <p className="text-gray-600">Department: {teacher.department}</p>
                            <p className="text-gray-600">Specialization: {teacher.specialization}</p>
                            <p className="text-gray-600">Sex: {teacher.sex}</p>
                </div>
            </div>
        </div>
    );
}