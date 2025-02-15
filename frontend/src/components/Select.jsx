import React from 'react'

const Select = ({
    label,
    title = "",
    options = [],
    className,
    ...props
}, ref) => {

    return (
        <div className='w-[100%] flex flex-col justify-start items-start'>
            {label && <label className='text-lg font-bold'>{label}</label>}
            <div className={`w-full ${className}`}>
                <h3 className="mb-4 font-semibold dark:text-white">{title}</h3>
                <select
                    ref={ref} 
                    className="w-full py-2 text-sm font-medium text-gray-900 bg-white border-2 border-black rounded-lg dark:bg-gray-700 dark:text-white"
                    {...props}>
                    {options.map((option) => (
                        <option
                            key={option}
                            value={option}
                            className="w-full border-b border-black rounded-t-lg dark:border-gray-600">
                                {option}
                        </option>
                    ))}                    
                </select>
            </div>
        </div>
    )
}

export default React.forwardRef(Select);
