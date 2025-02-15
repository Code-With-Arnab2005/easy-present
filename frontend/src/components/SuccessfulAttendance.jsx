import React from 'react';

const SuccessMessage = () => {
  return (
    <div className=' min-h-[70vh]'>
      <div className='bg-[#a3cfaf] shadow-xl w-1/2 h-40 mx-auto flex flex-col items-center justify-center my-10 py-3 px-7 border-2 border-black rounded-xl'>
        <span className='text-2xl'>Your attendance is submitted successful</span>
        <span className='text-lg'>Go to home page <a href="/" className='text-blue-600 hover:text-blue-700 underline'>Home</a></span>
      </div>
    </div>
  );
};

export default SuccessMessage;