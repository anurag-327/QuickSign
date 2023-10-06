import React from 'react'

const Footer = () => {
  return (
    <footer className="  flex flex-col text-gray-400 text-center mt-12 font-sans z-10 p-4  font-semibold ">
            <span>Hoisted on <a href="vercel.com">vercel</a></span>
            <span>Made by <a href='https://github.com/anurag-327' className='text-blue-300 underline'>@anurag-327</a></span>
            <span>Copyright © <span id="">2023</span>
              <span> By Quick Sign</span></span>
    </footer>
  )
}

export default Footer