import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({
    title="",
    subtitle="",
}) => {
    return (
        <div className='rounded-xl m-6'>
            <div className="font-bold min-w-[28vw] min-h-[200px] p-6 flex flex-col justify-center items-center bg-gray-100 border border-gray-500 rounded-lg shadow-xl hover:bg-gray-200 transition-all delay-50">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800">{title}</h5>
                <p className="font-normal text-gray-700">{subtitle}</p>
            </div>
        </div>
    )
}

export default Card
