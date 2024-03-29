import React from 'react'

const Loader = () => {
  return (
    <div
    className="inline-block font-poppins h-8 w-8 border-orange-500 mt-2 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]"
    role="status">
    <span
      className="!absolute font-poppins !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Loading...</span
    >
  </div>
  )
}

export default Loader