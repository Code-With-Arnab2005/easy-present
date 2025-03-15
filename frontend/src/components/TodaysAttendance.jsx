import React, { useEffect, useState } from 'react'
const TodaysAttendance = () => {

    const [lists, setLists] = useState([]);
    const [loading, setIsloading] = useState(true);

    useEffect(() => {
        // console.log("entered")
        const fetchAttendances = async() => {
            fetch("https://easy-present-production.up.railway.app/api/v1/todays-attendance")
            .then((res) => {
                // console.log(res);
                return res.json()
            })
            .then((data) => {
                // console.log(data.data);
                setLists(data.data);
            })
            .catch(err => console.log(err))
            // console.log(lists)
            setIsloading(false);
        }
        fetchAttendances();
    }, [])


    if (loading) {
        return (
            <div className="flex m-5 items-center justify-center w-[94vw] h-[70vh] rounded-lg dark:bg-gray-800 dark:border-gray-700">
                <div className="px-4 py-3 text-2xl font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">Fetching Data...</div>
            </div>
        )
    }
    if(lists.length == 0){
        return (
            <div className='w-full min-h-[70vh] text-center mt-2 mx-auto text-4xl font-bold'>No Attendances</div>
        )
    }
    if (lists && lists.length > 0) {
        return (
            <div className="min-h-[65vh] relative overflow-x-auto rounded-xl m-5">
                <table className="w-full text-sm text-left rtl:text-right">
                    <thead className="text-black text-lg font-bold uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                        <tr className='border-b-2 border-black'>
                            <th scope="col" className="px-6 py-3 border-r-2 border-r-black">
                                Student's Name
                            </th>
                            <th scope="col" className="px-6 py-3 border-r-2 border-r-black">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3 border-r-2 border-r-black">
                                course
                            </th>
                            <th scope="col" className="px-6 py-3 border-r-2 border-r-black">
                                Department
                            </th>
                            <th scope="col" className="px-6 py-3 border-r-2 border-r-black">
                                Year
                            </th>
                            <th scope="col" className="px-6 py-3 border-r-2 border-r-black">
                                Section
                            </th>
                            <th scope="col" className="px-6 py-3 border-r-2 border-r-black">
                                roll
                            </th>
                            <th scope="col" className="px-6 py-3">
                                student id
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {lists.map((list) => (
                            <tr key={list.email} className="bg-white text-[15px] border-b-2 border-black text-black dark:bg-gray-800">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border-r-2 border-r-black dark:text-white">
                                    {list.fullname}
                                </th>
                                <td className="px-6 py-4 border-r-2 border-r-black">
                                    {list.email}
                                </td>
                                <td className="px-6 py-4 border-r-2 border-r-black">
                                    {list.course}
                                </td>
                                <td className="px-6 py-4 border-r-2 border-r-black">
                                    {list.department}
                                </td>
                                <td className="px-6 py-4 border-r-2 border-r-black">
                                    {list.year}
                                </td>
                                <td className="px-6 py-4 border-r-2 border-r-black">
                                    {list.section}
                                </td>
                                <td className="px-6 py-4 border-r-2 border-r-black">
                                    {list.roll}
                                </td>
                                <td className="px-6 py-4">
                                    {list.studentId}
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        )
    } else {
        <div className="w-screen h-screen overflow-x-auto rounded-xl m-5">
            No Attendances yet
        </div>
    }
}

export default TodaysAttendance;
