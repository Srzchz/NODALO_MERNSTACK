import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function AddTeacher({ teachers }) {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [employeeNumber, setEmployeeNumber] = useState("");
    const [department, setDepartment] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [sex, setSex] = useState("");


    return (
        <div className="bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center py-8">Add Teacher</h1>
            <div className="flex flex-wrap justify-center">
                <div className="bg-red-100 shadow-md rounded-lg p-4 m-4 max-w-sm mx-auto">
                    <form className="w-full max-w-sm" onSubmit={(e) => {

                        e.preventDefault()
                        const newTeacher = {
                            id: teachers.length + 1,
                            name: name,
                            employeeId: employeeNumber,
                            department: department,
                            specialization: specialization,
                            sex: sex
                            
                        };
                        teachers.push(newTeacher);
                        setName("");
                        setEmployeeNumber("");
                        setDepartment("");
                        setSpecialization("");
                        setSex("");

                        navigate("/teacher");
                    }}>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Enter name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="employeeNumber">
                                Employee Number
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="employeeNumber"
                                type="text"
                                placeholder="Enter employee number"
                                value={employeeNumber}
                                onChange={(e) => setEmployeeNumber(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">
                                Department
                            </label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="department"
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}
                                required
                            >
                                <option value="">Select Department</option>
                                <option value="Computer Science">Computer Science</option>
                                <option value="Mathematics">Mathematics</option>
                                <option value="Physics">Physics</option>
                                <option value="Chemistry">Chemistry</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="specialization">
                                Specialization
                            </label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="specialization"
                                value={specialization}
                                onChange={(e) => setSpecialization(e.target.value)}
                                required
                            >
                                <option value="">Select Specialization</option>
                                <option value="Software Engineering">Software Engineering</option>
                                <option value="Data Science">Data Science</option>
                                <option value="Artificial Intelligence">Artificial Intelligence</option>
                                <option value="Cybersecurity">Cybersecurity</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sex">
                                Sex
                            </label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="sex"
                                value={sex}
                                onChange={(e) => setSex(e.target.value)}
                                required
                            >
                                <option value="">Select Sex</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Add Teacher
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}   
