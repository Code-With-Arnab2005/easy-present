import React, { useId } from 'react'

const Input = (
    {
        label,
        type = "text",
        className = "",
        ...props
    },
    ref
) => {
    const id = useId();
    return (
        <div className='flex flex-col w-full'>
            {label && <label htmlFor={id} className='text-lg font-semibold text-gray-700'>{label}</label>}
            <input
                ref={ref}
                type={type}
                id={id}
                className={`p-3 border-2 border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-800 ${className}`}
                {...props}
            />
        </div>
    )
}

export default React.forwardRef(Input);


// import React, { useId } from 'react'

// const Input = ({
//     label,
//     type = "text",
//     className = "",
//     onchange,
//     ...props
// }, ref) => {
//     const id = useId();
//     return (
//         <div className='flex items-center gap-2 w-full'>
//             {label && <label htmlFor={id} className='text-lg font-bold'>{label}</label>}
//             <input
//                 type={type}
//                 id={id}
//                 className={`p-2 border-2 border-black text-white text-bold rounded-xl ${className}`}
//                 onChange={onchange}
//                 {...props}
//                 ref={ref}
//             />
//         </div>
//     )
// }

// export default React.forwardRef(Input);
